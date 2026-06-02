const form =
    document.getElementById("driveForm");

const popup =
    document.getElementById("popup");

const closeBtn =
    document.getElementById("closePopup");

const inputs =
    document.querySelectorAll(
        "#driveForm input, #driveForm select"
    );

// тема

const themeBtn =
    document.getElementById("themeBtn");

function setTheme(theme){

    if(theme === "light"){

        document.body.classList.add("light");
        themeBtn.textContent = "☀️";

    }else{

        document.body.classList.remove("light");
        themeBtn.textContent = "🌙";
    }
}

const savedTheme =
    localStorage.getItem("theme");

if(savedTheme){
    setTheme(savedTheme);
}

themeBtn.addEventListener("click", () => {

    const newTheme =
        document.body.classList.contains("light")
            ? "dark"
            : "light";

    localStorage.setItem(
        "theme",
        newTheme
    );

    setTheme(newTheme);
});

// валидация

inputs.forEach(input => {

    input.addEventListener(
        "input",
        () => {

            if(input.value.trim()){

                input.classList.add("valid");
                input.classList.remove("invalid");

            }else{

                input.classList.add("invalid");
                input.classList.remove("valid");
            }
        });
});

form.addEventListener(
    "submit",
    e => {

        e.preventDefault();

        let isValid = true;

        inputs.forEach(input => {

            if(!input.value.trim()){

                isValid = false;

                input.classList.add(
                    "invalid"
                );
            }
        });

        if(isValid){

            popup.classList.add("show");
        }
    });

// закрытие popup

closeBtn.addEventListener(
    "click",
    () => {

        popup.classList.remove("show");
    });

popup.addEventListener(
    "click",
    e => {

        if(e.target === popup){

            popup.classList.remove("show");
        }
    });

// клавиатура

document.addEventListener(
    "keydown",
    e => {

        if(e.key === "Escape"){

            popup.classList.remove("show");
        }

        if(e.key.toLowerCase() === "t"){

            themeBtn.click();
        }
    });