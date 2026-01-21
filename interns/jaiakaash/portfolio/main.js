document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM ready");

    const cards = document.querySelectorAll(".achievement-card");
    const overlay = document.querySelector(".achievement-overlay");
    const overlayImg = document.getElementById("overlay-img");
    const overlayTitle = document.getElementById("overlay-title");
    const overlayDesc = document.getElementById("overlay-desc");
    const backBtn = document.querySelector(".back-btn");

    console.log("Cards found:", cards.length);

    cards.forEach(card => {
        card.addEventListener("click", () => {
            console.log("Card clicked");

            overlayTitle.textContent = card.dataset.title;
            overlayDesc.textContent = card.dataset.desc;
            overlayImg.src = card.dataset.img;

            overlay.classList.add("active");
            document.body.style.overflow =  "auto";
        });
    });

    backBtn.addEventListener("click", () => {
        overlay.classList.remove("active");
        document.body.style.overflow = "auto";
    });
    document.getElementById("downloadCV").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "assets/Jai_Akaash_s_Resume.pdf" // path to resume
    link.download = "Jai_Akaash_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

});
