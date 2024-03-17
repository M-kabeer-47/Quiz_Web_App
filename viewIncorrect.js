let incorrectAnswers = JSON.parse(localStorage.getItem("incorrect"));
let attempted = JSON.parse(localStorage.getItem("attempted"));
let quiz = JSON.parse(localStorage.getItem("quiz"));
let questions = quiz.questions;
let index = 0;
let questionText = quiz.questions[incorrectAnswers[0]].question;
document.querySelector(".questionContainer").textContent = questionText;
let options = document.querySelectorAll(".optionContainer");
for (let i = 0; i < options.length; i++) {
  options[i].textContent = quiz.questions[incorrectAnswers[0]].options[i];
}
document.querySelector("label").textContent = "Question "+(incorrectAnswers[index]+1);
highlight(attempted[0],questions[incorrectAnswers[0]].correctOption);




document.querySelector(".Next").addEventListener("click",function(){
    removehighlight(attempted[index],questions[incorrectAnswers[index]].correctOption);
    index+=1;
    if(incorrectAnswers.length<=index){
        index=0;
        
    }
    let question = incorrectAnswers[index];
    let questionText = quiz.questions[question].question;
document.querySelector(".questionContainer").textContent = questionText;
let options = document.querySelectorAll(".optionContainer");
for (let i = 0; i < options.length; i++) {
  options[i].textContent = quiz.questions[question].options[i];
}
document.querySelector("label").textContent = "Question "+(incorrectAnswers[index] + 1);
highlight(attempted[index],questions[question].correctOption);
})






function highlight(userAnswer,correctAnswer) {
    switch (userAnswer) {
      case 1:
        document.querySelector(".c1").classList.add("red");
        break;
      case 2:
        document.querySelector(".c2").classList.add("red");
        break;
      case 3:
        document.querySelector(".c3").classList.add("red");
        break;
      case 4:
        document.querySelector(".c4").classList.add("red");
        break;
    }
    switch (correctAnswer) {
      case 1:
        document.querySelector(".c1").classList.add("green");
        break;
      case 2:
        document.querySelector(".c2").classList.add("green");
        break;
      case 3:
        document.querySelector(".c3").classList.add("green");
        break;
      case 4:
        document.querySelector(".c4").classList.add("green");
        break;
    }
  }
  function removehighlight(userAnswer,correctAnswer) {
      switch (userAnswer) {
        case 1:
          document.querySelector(".c1").classList.remove("red");
          break;
        case 2:
          document.querySelector(".c2").classList.remove("red");
          break;
        case 3:
          document.querySelector(".c3").classList.remove("red");
          break;
        case 4:
          document.querySelector(".c4").classList.remove("red");
          break;
      }
      switch (correctAnswer) {
        case 1:
          document.querySelector(".c1").classList.remove("green");
          break;
        case 2:
          document.querySelector(".c2").classList.remove("green");
          break;
        case 3:
          document.querySelector(".c3").classList.remove("green");
          break;
        case 4:
          document.querySelector(".c4").classList.remove("green");
          break;
      }
    }