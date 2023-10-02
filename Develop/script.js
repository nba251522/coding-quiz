var timer = 60;
var currentQuestion = 0;
var score = 0;

var questions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Transfer Markup Language"],
        correct: 1
    },
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

