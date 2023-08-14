window.addEventListener("scroll", function () {
    const textContainers = document.querySelectorAll(".scroll");

    textContainers.forEach((container) => {
        const containerTop = container.getBoundingClientRect().top;

        if (containerTop < window.innerHeight - 100) {
            container.classList.remove("fade-out");
        } else {
            container.classList.add("fade-out");
        }
    });
});