/* script.js */

document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("mouseover", () => {
        ctaButton.style.transform = "scale(1.1)";
        ctaButton.style.boxShadow = "0px 0px 20px rgba(255, 152, 0, 0.8)";
    });

    ctaButton.addEventListener("mouseleave", () => {
        ctaButton.style.transform = "scale(1)";
        ctaButton.style.boxShadow = "none";
    });

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for reaching out! Our team will contact you soon.");
            form.reset();
        });
    }
});
