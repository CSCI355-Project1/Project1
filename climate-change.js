// Function to toggle the visibility of the facts section
function toggleFacts() {
    const factsSection = document.getElementById("facts-section");
    const revealButton = document.getElementById("reveal-facts-btn");

    if (factsSection.style.display === "none" || factsSection.style.display === "") {
        factsSection.style.display = "block";
        revealButton.textContent = "Hide Facts";
    } else {
        factsSection.style.display = "none";
        revealButton.textContent = "Click to Reveal Facts";
    }
}

// Attach event listener to button
document.getElementById("reveal-facts-btn").addEventListener("click", toggleFacts);
