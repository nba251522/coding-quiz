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
        question: "Which CSS attribute alters the background shade of an element?",
        answers: ["background", "color", "bgcolor", "background-color"],
        correct: 3
    },
    {
        question: "CSS is an acronym for what?",
        answers: ["Computer Style Structure", "Computer Style Sheets", "Cascading Style Structure", "Cascading Style Sheets"],
        correct: 3
    },
    {
        question: "Identify the JavaScript library from the options below.",
        answers: ["HTML", "Python", "jQuery", "PHP"],
        correct: 2
    },
    {
        question: "Which HTML tag is employed to produce clickable links?",
        answers: ["<ahref>", "<hl>", "<link>", "<a>"],
        correct: 3
    },
    {
        question: "Which is not recognized as a valid HTTP verb?",
        answers: ["PUT", "GET", "FETCH", "POST"],
        correct: 2
    },
    {
        question: "Which character in CSS denotes an element with a particular class name?",
        answers: ["%", "#", "!", "."],
        correct: 3
    },
    {
        question: "Which JavaScript method verifies if any element in an array satisfies the provided test?",
        answers: ["filter()", "find()", "some()", "every()"],
        correct: 2
    },
    {
        question: "What is not a method to retain data on the browser of a user?",
        answers: ["Cookies", "Disk Storage", "Session Storage", "Local Storage"],
        correct: 1
    }
];

document.getElementById('start-btn').addEventListener('click', function() {
    this.style.display = 'none';
    shuffle(questions);
    document.getElementById('question-container').style.display = 'block';
    startTimer();
    displayQuestion();
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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

