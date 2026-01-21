document.addEventListener("DOMContentLoaded", () => {

    const themeBtn = document.getElementById("theme-toggle");
    const body = document.body;

    function loadTheme() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            body.classList.add("dark");
            if (themeBtn) themeBtn.textContent = "☀️";
        }
    }

    function toggleTheme() {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            themeBtn.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            themeBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    }

    loadTheme();

    if (themeBtn) {
        themeBtn.addEventListener("click", toggleTheme);
    }

    const resumeBtn = document.getElementById("download-resume");

    if (resumeBtn) {
        resumeBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const link = document.createElement("a");
            link.href = "resume.pdf";
            link.download = "Rohan_Kumar_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
