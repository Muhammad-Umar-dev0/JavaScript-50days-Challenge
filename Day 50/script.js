let parameters = {
    count: false,
    letters: false,
    numbers: false,
    special: false
};

let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

function strengthChecker() {
    let password = document.getElementById("password").value;

    parameters.letters = /[A-Z]+/.test(password);  
    parameters.numbers = /[0-9]+/.test(password);
    parameters.special = /[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password);
    parameters.count = password.length > 7;

    updateCriteria();
    updateStrengthBar();
}

function updateCriteria() {
    document.getElementById("letters").classList.toggle('valid', parameters.letters);
    document.getElementById("numbers").classList.toggle('valid', parameters.numbers);
    document.getElementById("special").classList.toggle('valid', parameters.special);
    document.getElementById("length").classList.toggle('valid', parameters.count);
}

function updateStrengthBar() {
    let barLength = Object.values(parameters).filter(value => value).length;

    strengthBar.innerHTML = "";
    for (let i = 0; i < barLength; i++) {
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }

    let spanRef = document.getElementsByClassName("strength");
    for (let i = 0; i < spanRef.length; i++) {
        let colors = ["#ff3e36", "#ff691f", "#ffda36", "#0be881"];
        spanRef[i].style.background = colors[spanRef.length - 1];
        let messages = ["Your password is very weak", "Your password is weak", "Your password is good", "Your password is strong"];
        msg.textContent = messages[spanRef.length - 1];
    }
}

function toggle() {
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");

    if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text");
        eye.classList.add("active");
    } else {
        password.setAttribute("type", "password");
        eye.classList.remove("active");
    }
}
