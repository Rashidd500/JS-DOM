const car = document.getElementById("carImage");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;

    car.style.transform =
        `translate(${x}px, ${y}px)`;
});

const images = [

    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200",

    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200",

    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200"

];

let current = 0;

const sliderImage =
    document.getElementById("sliderImage");

function updateSlide() {

    sliderImage.src =
        images[current];
}

document
    .getElementById("next")
    .addEventListener("click", () => {

        current++;

        if (current >= images.length) {
            current = 0;
        }

        updateSlide();
    });

document
    .getElementById("prev")
    .addEventListener("click", () => {

        current--;

        if (current < 0) {
            current = images.length - 1;
        }

        updateSlide();
    });

document
    .addEventListener("keydown", (e) => {

        if (e.key === "ArrowRight") {
            document
                .getElementById("next")
                .click();
        }

        if (e.key === "ArrowLeft") {
            document
                .getElementById("prev")
                .click();
        }
    });

setInterval(() => {

    current++;

    if (current >= images.length) {
        current = 0;
    }

    updateSlide();

}, 5000);

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (
        document.body.classList.contains("light")
    ) {
        themeBtn.textContent = "☀️";
    }
    else {
        themeBtn.textContent = "🌙";
    }
});

document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "t") {
        themeBtn.click();
    }
});