var timer = 60;
var currentQuestion = 0;
var score = 0;

var questions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Transfer Markup Language"],
        correct: 2
    },
    {
        question: "Which tag is used to insert a line break in HTML?",
        answers: ["<lb>", "<br>", "<linebreak>", "<breakline>"],
        correct: 1
    },
    {
        question: "Which property in CSS is used to change the background color?",
        answers: ["bgcolor", "color", "background-color", "background"],
        correct: 2
    },
    {
        question: "What does CSS stand for?",
        answers: ["Computer Style Sheets", "Cascading Style Structure", "Cascading Style Sheets", "Computer Style Structure"],
        correct: 2
    },
    {
        question: "Which of the following is a JavaScript library?",
        answers: ["jQuery", "Python", "PHP", "HTML"],
        correct: 0
    },
    {
        question: "Which tag in HTML is used to create a hyperlink?",
        answers: ["<hl>", "<ahref>", "<link>", "<a>"],
        correct: 3
    },
    {
        question: "Which of the following is NOT a valid HTTP method?",
        answers: ["FETCH", "POST", "GET", "PUT"],
        correct: 0
    },
    {
        question: "What symbol is used to select an element with a specific class in CSS?",
        answers: ["#", ".", "%", "!"],
        correct: 1
    },
    {
        question: "In which array method in JavaScript can you check if at least one element passes a test?",
        answers: ["every()", "some()", "find()", "filter()"],
        correct: 1
    },
    {
        question: "Which of these is NOT a way to store data in a user's browser?",
        answers: ["Session Storage", "Cookies", "Local Storage", "Disk Storage"],
        correct: 3
    }
];

document.getElementById('start-btn').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    startTimer();
    displayQuestion();
});

function startTimer() {
    var timerInterval = setInterval(function() {
        timer--;
        document.getElementById('time-value').innerText = timer;

        if (timer <= 0 || currentQuestion >= questions.length) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}
function displayQuestion() {
    var q = questions[currentQuestion];
    var container = document.getElementById('answer-buttons');
    container.innerHTML = '';
    document.getElementById('question-text').innerText = q.question;

    for (var i = 0; i < q.answers.length; i++) {
        (function(index) {
            var btn = document.createElement('button');
            btn.innerText = q.answers[index];
            btn.addEventListener('click', function(e) {
                if (index === q.correct) {
                    score++;
                } else {
                    timer -= 10; 
                }
    
                if (currentQuestion < questions.length - 1) {
                    currentQuestion++;
                    displayQuestion();
                } else {
                    endGame();
                }
            });
            container.appendChild(btn);
        })(i);
    }
}
function endGame() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('score-value').innerText = score;
}

