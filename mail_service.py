from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
import os
import json
from email.message import EmailMessage
import firebase_admin
from firebase_admin import credentials, firestore  # or db for Realtime DB

# Initialize Firebase app
firebase_credentials = json.loads(os.environ['GOOGLE_CREDENTIALS'])
cred = credentials.Certificate(firebase_credentials)
firebase_admin.initialize_app(cred)

# Use Firestore
db = firestore.client()

app = Flask(__name__)
CORS(app)

def get_email_credentials():
    # Fetch email settings from Firestore document
    doc = db.collection("config").document("email_settings").get()
    if doc.exists:
        data = doc.to_dict()
        return data.get("EMAIL_ADDRESS"), data.get("EMAIL_PASSWORD")
    else:
        raise Exception("Email settings not found in Firebase")

@app.route("/send", methods=["POST"])
def send_email():
    data = request.get_json()
    name = data.get("name")
    sender_email = data.get("email")
    message_body = data.get("message")

    try:
        EMAIL_ADDRESS, EMAIL_PASSWORD = get_email_credentials()

        msg = EmailMessage()
        msg["Subject"] = f"New message from {name}"
        msg["From"] = EMAIL_ADDRESS
        msg["To"] = EMAIL_ADDRESS
        msg.set_content(f"Name: {name}\nEmail: {sender_email}\n\nMessage:\n{message_body}")

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)
        return jsonify({"success": True}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
