/* test*/
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

let NowQuestion = 0

function buildQuiz(){
    const output = [];
    let randomQuestion = Math.floor(Math.random() * 2 + 1)
    if (randomQuestion == 1) {
        myQuestions = myQuestions1
    }
    else{
        myQuestions = myQuestions2
    }
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label class='question'>
                    <input type= "radio" name="question${questionNumber}" value= "${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
                );
            }
            if (questionNumber == NowQuestion){
                output.push(
                    `<div class='questionContainer'style='display:block;'><div class="question"><b>Вопрос №${questionNumber + 1}.</b> К какому варианту английского языка относится это слово?<br> <b>${currentQuestion.question} </b></div>
                    <div class="answers"> ${answers.join('')} </div></div>`
                );
            }
           else{
            output.push(
                `<div class='questionContainer'><div class="question"> <b> Вопрос №${questionNumber + 1}.</b> К какому варианту английского языка относится это слово?<br><b>${currentQuestion.question}</b> </div>
                <div class="answers"> ${answers.join('')} </div></div>`
            );
           }
        }
    );
    quizContainer.innerHTML = output.join('');
}
function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    const questionContainers = quizContainer.querySelectorAll('.questionContainer');
if (NowQuestion == myQuestions.length - 1){
     let numCorrect = 0;
     submitButton.style.display='none'
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = ` Ваш результат:${numCorrect} из ${myQuestions.length}`;
    questionContainers.forEach((container)=>{
     container.style.display='block'
    })
}
else{
    questionContainers[NowQuestion].style.display='none'
    questionContainers[NowQuestion + 1].style.display='block'
    NowQuestion++
   if (NowQuestion == myQuestions.length - 1){
       submitButton.textContent= 'Завершить'
   }
}
   
}
const myQuestions1 = [
    {
        question: "autumn",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "lawyer",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "bill",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "busy",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "engine",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "movie",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "fortnight",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "yard",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "high street",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "vacation",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "lift",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "truck",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "mad",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "highway",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "nasty",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "sidewalk",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "pocket money",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "mail",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "postman",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "bar",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "public toilet",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "line",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "railway",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "eraser",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "rubbish",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "store",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "shop assistant",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "schedule",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "trainers",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "flashlight",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "wardrobe",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "zipper",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
]
const myQuestions2 = [
    {
        question: "spoon",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "lawyer",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "bill",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "busy",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "engine",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "movie",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "fortnight",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "yard",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "high street",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "vacation",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "lift",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "truck",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "mad",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "highway",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "nasty",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "sidewalk",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "pocket money",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "mail",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "postman",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "bar",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "public toilet",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "line",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "railway",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "eraser",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "rubbish",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "store",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "shop assistant",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "schedule",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "trainers",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "flashlight",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "wardrobe",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "zipper",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
]
buildQuiz();
submitButton.addEventListener('click', showResults);




