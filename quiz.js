// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer by selecting the checked radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Check if the user has selected an answer
    if (!userAnswer) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }

    // Compare the user's answer with the correct answer and provide feedback
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
