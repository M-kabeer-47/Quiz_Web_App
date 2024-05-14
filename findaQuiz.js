document.querySelector(".btn").addEventListener("click", function () {
    let id = document.querySelector("#ID").value;
    let existingQuizes;
    let Quiz;

    try {
        existingQuizes = JSON.parse(localStorage.getItem('quizes'));
    } catch (error) {
        alert("Error: " + error.message);
        return; // Exit the function if an error occurs
    }

    // Check if existingQuizes is null or undefined
    if (!existingQuizes) {
        alert("No quizzes exist");
        return; // Exit the function if no quizzes exist
    }

    let flag = false;
    for (let i = 0; i < existingQuizes.length; i++) {
        if (existingQuizes[i].id === id) {
            Quiz = existingQuizes[i];
            flag = true;
            break;
        }
    }
    if (flag) {
        localStorage.setItem('quiz', JSON.stringify(Quiz));
        window.location.href = "takeQuiz.html";
    } else {
        alert("Quiz doesn't exist");
    }
});
