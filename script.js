// OPEN MENU SCRIPT


let mobileNav = document.getElementById('mobile-nav');

function openMenu() {
  document.getElementById("mobile-nav").style.height = "100%";
}

function closeMenu() {
  document.getElementById("mobile-nav").style.height = "0%";
}

function validateForm() {
    var fullName = document.getElementById("full-name").value;
    var mySubject = document.getElementById("subject").value;
    var myEmail = document.getElementById("email").value;
    
    var nameReg = /^[a-zA-Z\s]+$/;
    var subjectReg = /[a-zA-Z0-9\s]+/;
    var emailReg = /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/;
    
    (function validateName() {
        if(fullName.match(nameReg)) {
            document.getElementById("full-name").style.outline = "3px solid green";
            document.getElementById("name-valid").style.display = "none";
        } else {
            document.getElementById("full-name").style.outline = "3px solid red";
            document.getElementById("name-valid").style.display = "inline-block";
        }
    })();
    
    (function validateSubject() {
        if(mySubject.match(subjectReg)) {
            document.getElementById("subject").style.outline = "3px solid green";
            document.getElementById("subject-valid").style.display = "none";
        } else {
            document.getElementById("subject").style.outline = "3px solid red";
            document.getElementById("subject-valid").style.display = "inline-block";
        }
    })();
    
        (function validateEmail() {
        if(myEmail.match(emailReg)) {
            document.getElementById("email").style.outline = "3px solid green";
            document.getElementById("email-valid").style.display = "none";
        } else {
            document.getElementById("email").style.outline = "3px solid red";
            document.getElementById("email-valid").style.display = "inline-block";
        }
    })();
}