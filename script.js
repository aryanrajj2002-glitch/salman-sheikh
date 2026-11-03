const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle?.addEventListener("click", () => {
    navigation.classList.toggle("show");

    menuToggle.textContent =
        navigation.classList.contains("show") ? "✕" : "☰";
});

document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});

const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", event => {
    event.preventDefault();

    alert("Thank you! Please connect this form to the clinic's email or WhatsApp to receive enquiries.");

    contactForm.reset();
});
