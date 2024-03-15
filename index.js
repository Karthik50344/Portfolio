function toggleMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    }
    else {
        x.className = "navbar";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("scrollToTopBtn").style.display = "block";
    }
    else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function showCertificate(certificateSrc) {
    document.getElementById('certificateImage').src = certificateSrc;
    document.getElementById('certificatePopup').style.display = 'block';
}

function closeCertificatePopup() {
    document.getElementById('certificatePopup').style.display = 'none';
}