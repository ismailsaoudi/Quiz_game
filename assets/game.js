var question = document.querySelector('#question')
var choices = document.querySelector('.choice-text')
var progressText = document.querySelector('#progressText')
var scoretext = document.querySelector('#score')
var progressBarFull = document.querySelector('#progressBarFull')

var currentQuestion = {}
var acceptingAnswers = true
var score = 0
var questionCounter = 0
var availableQuestions = []

var questions = [

    {
        question: "Jimmy's father has three sons- Paul I and Paul II. Can you guess the name of the third son? ",
        a: 'Paul III',
        b: 'Jerin',
        c: 'Jimmy',
        d: 'None',
        Answer: c
    },


    {
        question: "You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?",
        a: '1st',
        b: '2nd',
        c: '3rd',
        d: 'None of the bove',
        Answer: c
    },
    {
        question: "How many months have 28 days?",
        a: '2',
        b: '1',
        c: 'All Of them',
        d: "Depends if there's a leap year or not",
        Answer: c

    },
    {
        question: "How many 0.5cm slices can you cut from a bread that is 25cm long? ",
        a: '50',
        b: '20',
        c: '39',
        d: "0.5",
        Answer: a
    }

]

var score_points = 100
var max_questions = 4

startGame = () => {
questionCounter = 0
score = 0
availableQuestions = [...questions]
getNewQuestion ()
console.log(startGame)
}

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter > max_questions){
        localStorage.setItem('mostRecentScore', score)
    }


questionCounter++
progressText.innerText = `Question ${questionCounter} of ${max_questions}`
progressBarFull.style.width = `${(questionCounter / max_questions) * 100} %`

var questionIndex = Math.floor(math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
    var number = choice.dataset ['number']
    choice.innerText = currentQuestion['choice'+ number]
})
availableQuestions.splice(questionIndex, 1)

acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addeventlistener('click', e=> {
        if(!acceptingAnswers) true

        acceptingAnswers = false
        var selectedChoice= e.target
        var slectedAnswer= selectedChoice.dataset['number']
        let classToApply= slectedAnswer == currentQuestion.Answer ? 'correct':
'incorrect'


        if (classToApply === 'correct'){
            incrementScore(score_points)      
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion
        },1000)
    })
})

