function Quiz(title,id,noOfQuestions,questions){
    this.title = title;
    this.id = id;
    this.noOfQuestions = noOfQuestions;
    this.questions = questions;
}


document.querySelector(".btn").addEventListener("click",function(){
    let number=document.querySelector("#QUESTIONS").value;
    let title=document.querySelector("#TITLE").value;
    let id =document.querySelector("#ID").value;  
    if(id === "" || title === "" || number === ""){
        alert("Complete the fields")
        return;
    }

    let existingQuizes;
try {
    existingQuizes = JSON.parse(localStorage.getItem('quizes')) || [];
} catch (error) {
    
    existingQuizes = []; // Fallback to an empty array if parsing fails
}
        if(verifyExixtence(id,existingQuizes)){
            return;
        }
        localStorage.setItem('number', number);
        let quiz = new Quiz(title,id,number,[]);
        existingQuizes.push(quiz);
        localStorage.setItem('quizes', JSON.stringify(existingQuizes));
        window.location.href = "./makeQuiz.html";
    
})
function verifyExixtence(id,existingQuizes){
    if(existingQuizes.length === 0){
        return;
    }
    for(let i = 0;i<existingQuizes.length;i++){
        if(existingQuizes[i].id===id){
            alert("Quiz id already exists");
            return true;
        }
    }
}