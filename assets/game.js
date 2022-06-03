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
          correctAnswer: c
    },


    {
        question: "You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?",
        a: '1st',
        b: '2nd',
        c: '3rd',
        d: 'None of the bove',
          correctAnswer: c
    },
    {
        question: "How many months have 28 days?",
        a: '2',
        b: '1',
        c: 'All Of them',
        d: "Depends if there's a leap year or not",
        correctAnswer: c

    },
    {
        question: "How many 0.5cm slices can you cut from a bread that is 25cm long? ",
        a: '50',
        b: '20',
        c: '39',
        d: "0.5",
        correctAnswer: a
    }

]

