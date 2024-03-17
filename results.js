let score = 0;
let quiz = JSON.parse(localStorage.getItem("quiz"));
totalQuestions = parseInt(quiz.noOfQuestions);

    

let incorrectAnswers = [];
let attempted = [];
let correctAnswers = [];
let answers = JSON.parse(localStorage.getItem("answers"));
for(let i = 0;i<totalQuestions;i++){
    correctAnswers.push(quiz.questions[i].correctOption);
}
for(let i =0;i<totalQuestions;i++){
    if(correctAnswers[i]===answers[i]){
        score+=1;
    }
    else{
        incorrectAnswers.push(i);
        attempted.push(answers[i]);

    }
}
if(incorrectAnswers.length===0){
    document.querySelector(".view").classList.add("hide");
}
document.querySelector(".scores").textContent = score+"/"+totalQuestions;

document.querySelector(".total").textContent = totalQuestions;
document.querySelector(".correct").textContent = score;
document.querySelector(".incorrect").textContent = totalQuestions-score;
document.querySelector(".percentage").textContent = (score/totalQuestions)*100+ "%";
localStorage.setItem('incorrect',JSON.stringify(incorrectAnswers));
localStorage.setItem('attempted',JSON.stringify(attempted));