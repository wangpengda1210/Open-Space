function changeButtonStatus(button, levers, checkboxes) {
    let couldLaunch = true;

    levers.forEach(lever => {
       if (lever.value !== "100") {
           couldLaunch = false;
       }
    });

    checkboxes.forEach(checkbox => {
       if (!checkbox.checked) {
           couldLaunch = false;
       }
    });

    return couldLaunch;
}

function load() {
    let checkBoxes = document.querySelectorAll(".check-box");
    let levers = document.querySelectorAll(".lever");
    let launch = document.querySelector(".launch_button");
    let okButton = document.querySelector(".ok-button");
    let passwordBox = document.querySelector(".password-field");
    let rocket = document.querySelector(".rocket");

    for (let i in checkBoxes) {
        if (checkBoxes.hasOwnProperty(i)) {
            let currentCheckbox = checkBoxes[i];
            currentCheckbox.setAttribute("disabled", "");

            currentCheckbox.onchange = function () {
                if (changeButtonStatus(launch, levers, checkBoxes)) {
                    launch.removeAttribute("disabled");
                } else {
                    launch.setAttribute("disabled", "");
                }
            };
        }
    }

    for (let i in levers) {
        if (levers.hasOwnProperty(i)) {
            let currentLever = levers[i];
            currentLever.setAttribute("disabled", "");

            currentLever.onchange = function () {
                if (changeButtonStatus(launch, levers, checkBoxes)) {
                    launch.removeAttribute("disabled");
                } else {
                    launch.setAttribute("disabled", "");
                }
            };
        }
    }

    launch.setAttribute("disabled", "");

    okButton.addEventListener("click", function () {
        if (passwordBox.value === "TrustNo1") {
            for (let i in checkBoxes) {
                if (checkBoxes.hasOwnProperty(i)) {
                    checkBoxes[i].removeAttribute("disabled");
                }
            }

            for (let i in levers) {
                if (levers.hasOwnProperty(i)) {
                    levers[i].removeAttribute("disabled");
                }
            }

            passwordBox.setAttribute("disabled", "");
            okButton.setAttribute("disabled", "");
        }
    });

    launch.addEventListener("click", function () {
        setInterval(function () {
            rocket.style.left = rocket.offsetLeft + 10 + "px";
            rocket.style.top = rocket.offsetTop - 10 + "px";
        }, 30);
    });
}

window.onload = load;