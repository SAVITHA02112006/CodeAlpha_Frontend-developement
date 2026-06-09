// Hire Me Button

document.getElementById("hireBtn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

// Contact Form

document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    e.target.reset();
});