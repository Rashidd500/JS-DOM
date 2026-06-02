const themeBtn =
    document.getElementById("themeBtn");

function setTheme(theme){

    if(theme === "light"){

        document.body.classList.add("light");
        themeBtn.textContent = "☀️";

    } else {

        document.body.classList.remove("light");
        themeBtn.textContent = "🌙";
    }
}

const savedTheme =
    localStorage.getItem("theme");

if(savedTheme){

    setTheme(savedTheme);

}else{

    setTheme("dark");
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

document.addEventListener("keydown", e => {

    if(e.key.toLowerCase() === "t"){

        themeBtn.click();
    }
});

const accordions =
    document.querySelectorAll(".accordion");

accordions.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("active");

        const panel =
            btn.nextElementSibling;

        if(panel.style.maxHeight){

            panel.style.maxHeight = null;

        } else {

            panel.style.maxHeight =
                panel.scrollHeight + "px";
        }
    });
});

document.addEventListener("keydown", e => {

    if(e.key >= "1" && e.key <= "4"){

        const index =
            Number(e.key) - 1;

        accordions[index].click();
    }
});

const counters =
    document.querySelectorAll(".counter");

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                const counter =
                    entry.target;

                const target =
                    Number(counter.dataset.target);

                let current = 0;

                const timer =
                    setInterval(() => {

                        current +=
                            Math.ceil(target / 100);

                        if(current >= target){

                            current = target;
                            clearInterval(timer);
                        }

                        counter.textContent =
                            current;

                    }, 20);

                observer.unobserve(counter);
            }
        });

    });

counters.forEach(counter => {
    observer.observe(counter);
});

const statCards =
    document.querySelectorAll(".stat-card");

statCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-15px) scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";
    });
});