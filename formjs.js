function formValidation() {
    var passid = document.login.passid;
    var uemail = document.login.email;
    var pageId = document.getElementById('timer');
    if(passid===""|| uemail===""||pageId===""){
        return false;
    }

    if (ValidateEmail(uemail)) {
        if (passid_validation(passid, 7, 12)) {
            alert('Form Successfully Submitted');
            return showPage(pageId);
        }
    }
    return false;
}

function formValidation2() {
    var passid = document.registration.passid;
    var ucountry = document.registration.country;
    var uemail = document.registration.email;
    var umsex = document.registration.gender[0];
    var ufsex = document.registration.gender[1];
    var y = document.registration.passport[0];
    var n = document.registration.passport[1];

    if (ValidateEmail(uemail)) {
        if (passid_validation(passid, 7, 12)) {
            if (countryselect(ucountry)) {
                if (validsex(umsex, ufsex)) {
                    if (pass(y, n)) {
                        alert('Form Successfully Submitted');
                         var timerDuration = 60 * 1; 
            var display = document.getElementById('timer');
            startTimer(timerDuration, display, function() {
                showPage('login'); 
            });
            return true;
                    }
                }
            }
        }
    }
    return false;
}

function formValidation3() {
    var em = document.pwdrst.email;
    var a = document.pwdrst.passid;
    var b = document.pwdrst.cpassid;

    if (ValidateEmail(em)) {
        if (a.value === b.value) {
            alert("Password reset successful");
            return true;
        } else {
            alert("Passwords do not match");
            b.focus();
        }
    }
    return false;
}

function passid_validation(passid, mx, my) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
        alert("Password should not be empty / length be between " + mx + " to " + my);
        passid.focus();
        return false;
    }
    return true;
}

function countryselect(ucountry) {
    if (ucountry.value == "Default") {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    } else {
        return true;
    }
}

function ValidateEmail(uemail) {
    var email = uemail.value;
    var emailPattern = /^[0-9A-Za-z]+@[A-Za-z]+\.[A-Za-z]{2,5}$/;
    if (email.match(emailPattern)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

function validsex(umsex, ufsex) {
    if (umsex.checked || ufsex.checked) {
        return true;
    }
    alert('Select Male/Female');
    umsex.focus();
    return false;
}


function pass(y, n) {
    if (y.checked || n.checked) {
        return true;
    }
    alert('Select Male/Female');
    y.focus();
    return false;
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function showPage(pageId) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('registration').style.display = 'none';
    document.getElementById('pwdrst').style.display = 'none';
    document.getElementById('t').style.display = 'none';
    document.getElementById(pageId).style.display = 'block';
    if (pageId === 't') {
        var timerDuration = 60 * 1;
        var display = document.getElementById('timer');
        startTimer(timerDuration, display,function(){
             showPage('login')});
        }
    }

