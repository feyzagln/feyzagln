const facts = [
   "The thought of having a career in cybersecurity excites me 🔐",
    "Drinking tea is my favorite hobby ☕",
    "We became the second-place winners in the Çukurova Floor Curling tournament during high school.",
    "My favorite fruit is kiwi 🥝",
    "Resident Evil 7 is my favorite video game. 🎮",
    "My favorite book is \"The Little Prince\" 👑",
    "My name means abundance and prosperity.",
    "Studying computer engineering has been my dream since primary school. ",
    "\"Ramazam Karataş\" is my idol ⭐"
];

document.addEventListener("DOMContentLoaded", function() { 
    const button = document.getElementById("didYouKnowButton"); 
    const infoBox = document.getElementById("infoBox");  

    button.addEventListener("click", function() {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        infoBox.textContent = randomFact;

        // Kutuyu sadece ilk tıklamada görünür hale getir
        infoBox.style.display = "block";
    });
});
