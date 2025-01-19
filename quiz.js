// Check user answer
function checkAnswer() {
    // Identify the selected answer
    const choices = document.getElementsByName('quiz');
    let selectedAnswer = null;

    for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            selectedAnswer = choices[i].value;
            break;
        }
    }

    // feedback
    const feedback = document.getElementById('feedback');
    if (selectedAnswer === null) {
        feedback.textContent = "Please select an answer!";
        feedback.style.color = 'red';
    } else if (selectedAnswer === "4") {
        feedback.textContent = "Correct! 2 + 2 is indeed 4.";
        feedback.style.color = 'green';
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.style.color = 'red';
    }
}

// "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);





