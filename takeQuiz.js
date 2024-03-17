let count = 1;
let questionIndex = 0;
let answers = [];
let selectedOption = 5;
let previousSelected;
quiz = JSON.parse(localStorage.getItem("quiz"));
if (count === 1) {
  let questionText = quiz.questions[0].question;
  document.querySelector(".questionContainer").textContent = questionText;
  let options = document.querySelectorAll(".optionContainer");
  for (let i = 0; i < options.length; i++) {
    options[i].textContent = quiz.questions[0].options[i];
  }
}


function removePreviousBorder(currentQuestion) {
  let previousOption = answers[currentQuestion];
  switch (previousOption) {
    case 1:
      document.querySelector(".c1").classList.remove("border");
      break;
    case 2:
      document.querySelector(".c2").classList.remove("border");
      break;
    case 3:
      document.querySelector(".c3").classList.remove("border");
      break;
    case 4:
      document.querySelector(".c4").classList.remove("border");
      break;
  }
}

  let options = document.querySelectorAll("li");
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function (event) {
      let option = event.currentTarget.textContent;
      removePreviousBorder(questionIndex);

      if (option.includes("a.")) {
        selectedOption = 1;
        document.querySelector(".c1").classList.add("border");
      } else if (option.includes("b.")) {
        selectedOption = 2;
        document.querySelector(".c2").classList.add("border");
      } else if (option.includes("c.")) {
        selectedOption = 3;
        document.querySelector(".c3").classList.add("border");
      } else if (option.includes("d.")) {
        selectedOption = 4;
        document.querySelector(".c4").classList.add("border");
      }
      
      answers[questionIndex] = selectedOption;
    });
  }


document.querySelector(".Next").addEventListener("click", function () {
  document.querySelector(".previous").classList.add("display-previous");
  removePreviousBorder(questionIndex);
  if(count>answers.length){
    answers[questionIndex] = 5;
  }
  count += 1;
  if(answers.length>=count){
    addBorder(count-1);
  }
  if (parseInt(quiz.noOfQuestions) < count) {
    localStorage.setItem('answers', JSON.stringify(answers));
    window.location.href = "results.html";
    if(window.location.href !== "results.html"){
      return;
  }   

   
  }
  else if(parseInt(quiz.noOfQuestions) === count){
    document.querySelector(".Next").textContent = "Submit";
  }
  else if(parseInt(quiz.noOfQuestions>count)){
    document.querySelector(".Next").textContent = "Next";
  }
  questionIndex = count - 1;
  document.querySelector("label").textContent = "Question " + count;

  let questionText = quiz.questions[questionIndex].question;
  document.querySelector(".questionContainer").textContent = questionText;
  let options = document.querySelectorAll(".optionContainer");
  for (let i = 0; i < options.length; i++) {
    options[i].textContent = quiz.questions[questionIndex].options[i];
  }
  
});

document.querySelector(".previous").addEventListener("click", function () {
  removePreviousBorder(questionIndex);
  document.querySelector(".Next").textContent = "Next";
  count -= 1;
  addBorder(count-1);
  if(count===1){
    document.querySelector(".previous").classList.remove("display-previous");
  }
  if (quiz.noOfQuestions < count) {
    localStorage.setItem("answers", answers);
    window.location.href = "index.html";
   
  }
  questionIndex = count - 1;
  document.querySelector("label").textContent = "Question " + count;

  let questionText = quiz.questions[questionIndex].question;
  document.querySelector(".questionContainer").textContent = questionText;
  let options = document.querySelectorAll(".optionContainer");
  for (let i = 0; i < options.length; i++) {
    options[i].textContent = quiz.questions[questionIndex].options[i];
  }
  
});
function addBorder(index){
  let answer = answers[index];
  if (answer===1) {
    selectedOption = 1;
    document.querySelector(".c1").classList.add("border");
  } else if (answer===2) {
    selectedOption = 2;
    document.querySelector(".c2").classList.add("border");
  } else if (answer===3) {
    selectedOption = 3;
    document.querySelector(".c3").classList.add("border");
  } else if (answer===4) {
    selectedOption = 4;
    document.querySelector(".c4").classList.add("border");
  }
  

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