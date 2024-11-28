document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value;

    if (email && email.includes("@")) {
      alert(`Thank you for subscribing with ${email}!`);
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });

// FAQ toggling
document.querySelectorAll(".faq-item h3").forEach((item) => {
  item.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    answer.style.display =
      answer.style.display === "none" || !answer.style.display
        ? "block"
        : "none";
  });
});
