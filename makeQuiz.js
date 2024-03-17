
document.querySelector("i").addEventListener("click", function() {
    let button = document.querySelector(".drop-btn");
    let drop = document.querySelector(".drop-down-content");
    button.classList.add("visible-button");
    drop.classList.add("visible-drop");
});

let options = document.querySelectorAll(".option");
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function(event) {
        let button = document.querySelector(".drop-btn");
        let drop = document.querySelector(".drop-down-content");
        button.classList.remove("visible-button");
        drop.classList.remove("visible-drop");

        let p = document.querySelector("p");
        p.classList.add("black");
        p.textContent = event.target.textContent;
    });
}

 

function Question(question, options, correctOption) {
    this.question = question;
    this.options = options;
    this.correctOption = correctOption;
}

let questionCount = 0;
let questions = [];

   
let previous = document.querySelector(".previous");


document.querySelector(".Next").addEventListener("click", function() {
    let number = localStorage.getItem('number');
    let questionText = document.querySelector(".questionNumber").textContent;
    questionCount = parseInt(questionText.slice(9, questionText.length));
    
    
        previous.classList.add("display-previous");

   let questionIndex = addToQuestions(questionCount);   
   if(questionCount===number){
    document.querySelector("label").textContent = "Submit";
   }
   if(questionCount>=number){
    let existingQuizes = JSON.parse(localStorage.getItem('quizes'));
    existingQuizes[existingQuizes.length-1].questions = questions;
    localStorage.setItem('quizes', JSON.stringify(existingQuizes));
    window.location.href = "quizComplete.html"
    if(window.location.href !== "quizComplete.html"){
        return;
    }   
}
   let optionArray = document.querySelectorAll(".Option");
    questionCount++

    document.querySelector(".questionNumber").textContent = "Question " + questionCount
    
    if (questions.length > questionIndex + 1) {
        document.getElementById("question").value = questions[questionIndex + 1].question;
    
        for (let i = 0; i < optionArray.length; i++) {
            optionArray[i].value = questions[questionIndex + 1].options[i];
        }
    
        let correctOption = questions[questionIndex + 1].correctOption;
        addCorrectOption(correctOption);
    }
    
    else{
        document.getElementById("question").value = ""
    for (let i = 0; i < optionArray.length; i++) {
        optionArray[i].value=""
    }
   
    }
});



previous.addEventListener("click",function(){

    let questionText = document.querySelector(".questionNumber").textContent;
        questionCount = parseInt(questionText.slice(9, questionText.length));
        addToQuestions(questionCount);
        let previousQuestionIndex = questionCount-2;
        if(previousQuestionIndex === 0){
            previous.classList.remove("display-previous");
          }
        let question = questions[previousQuestionIndex].question;
        let options = questions[previousQuestionIndex].options;
        let correctOption = questions[previousQuestionIndex].correctOption;
        let questionTEXT = "Question "+ (questionCount-1);
        document.querySelector(".questionNumber").textContent = questionTEXT;
        let textarea = document.getElementById("question");
        textarea.value = question;
        let optionArray = document.querySelectorAll(".Option");
        for(let i =0;i<options.length;i++){
            optionArray[i].value = options[i];
        }
      addCorrectOption(correctOption);
      
                
        
})
function addCorrectOption(correctOption){
    switch(correctOption){
        case 1:
            document.querySelector("p").textContent = "a";
            break;
            case 2:
            document.querySelector("p").textContent = "b";
            break;
            case 3:
            document.querySelector("p").textContent = "c";
            break;
            case 4:
            document.querySelector("p").textContent = "d";
            break;
    }
    
        document.querySelector("p").classList.add("black");
}
window.addEventListener('beforeunload', function(event) {
    // Cancel the event
    event.preventDefault();  
    
    // Chrome requires returnValue to be set
    event.returnValue = '';
});
window.addEventListener('popstate', function(event) {
    // Display a custom message when the user attempts to navigate back
    if (confirm('Are you sure you want to go back?')) {
        // If the user confirms, allow the back navigation
        history.back();
    } else {
        // If the user cancels, prevent the back navigation
        history.forward();
    }
});

function addToQuestions(questionCount){
    let questionIndex = questionCount-1;
    let textarea = document.getElementById("question");
    let question = textarea.value;
    let optionArray = document.querySelectorAll(".Option");
    let options = [];
    for (let i = 0; i < optionArray.length; i++) {
        options.push(optionArray[i].value);
    }
    let correctOption = 0;
    let text = document.querySelector(".drop-btn").textContent;
    text = text.toString();
    if (text.includes("a")) {
        correctOption = 1;
    }
    else if(text.includes("b")){
        correctOption = 2;
    }
    else if(text.includes("c")){
        correctOption = 3;
    }
    else if(text.includes("d")){
        correctOption = 4;
    }
    let questionObject = new Question(question, options, correctOption)
    questions[questionIndex] = questionObject
    return questionIndex;
}