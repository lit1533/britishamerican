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
                    `<div class='questionContainer'style='display:block;'><div class="question"><b>Вопрос №${questionNumber + 1}.</b> В каком варианте английского языка чаще всего используется это слово?<br> <b>${currentQuestion.question} </b></div>
                    <div class="answers"> ${answers.join('')} </div></div>`
                );
            }
           else{
            output.push(
                `<div class='questionContainer'><div class="question"> <b> Вопрос №${questionNumber + 1}.</b> В каком варианте английского языка чаще всего используется это слово?<br><b>${currentQuestion.question}</b> </div>
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
        question: "autumn (осень)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "lawyer (адвокат)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "bill (чек)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "busy (занято(о телефонной линии))",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "engine (мотор)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "movie (фильм)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "fortnight (две недели)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "yard (двор)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "high street (главная улица)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "vacation (отпуск)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "lift (лифт)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "truck (грузовик)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "mad (сумасшедший)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "highway (шоссе)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "nasty (гадкий)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "sidewalk (тротуар)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "pocket money (карманные деньги)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "mail (почта)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "postman (почтальон)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "bar (бар)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "public toilet (общественный туалет)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "line (очередь)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "railway (железная дорога)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "eraser (ластик)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "rubbish (мусор)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    { 
        question: "store (магазин)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "shop assistant (консультант)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "schedule (расписание)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "trainers (кроссовки)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "flashlight (фонарик)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "wardrobe (гардероб)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "zipper (молния)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
]
const myQuestions2 = [
    {
        question: "fall (осень)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "barrister (адвокат)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "check (чек)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "engaged (занято(о телефонной линии))",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "motor (мотор)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "film (фильм)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "two weeks (две недели)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "garden (двор)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "main street (главная улица)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "holiday (отпуск)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "elevator (лифт)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "lorry (грузовик)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "crazy (сумасшедший)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "motorway (шоссе)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "mean (гадкий)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "pavement (тротуар)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "allowance (карманные деньги)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "post (почта)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "mailman (почтальон)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "pub (бар)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "restroom (общественный туалет)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "queue (очередь)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "railroad (железная дорога)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "rubber (ластик)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "garbage (мусор)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "shop (магазин)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "store clerk (консультант)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "timetable (расписание)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "sneakers (кроссовки)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "torch (фонарик)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
    {
        question: "closet (гардероб)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "b"
    },
    {
        question: "zip (молния)",
        answers: {
            a: "British",
            b: "American"
        },
        correctAnswer: "a"
    },
]
buildQuiz();
submitButton.addEventListener('click', showResults);




