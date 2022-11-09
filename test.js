$(document).ready(function(){
  var currentQuestion;
  var interval;
  var timeLeft = 10;
  var score = 0;
  
  var randomNumberGenerator = function (size) {
    return Math.ceil(Math.random() * size);
  };

  var updateTimeLeft = function (amount) {
    timeLeft += amount;
    $('#time-left').text(timeLeft);
  };
  
  var updateScore = function (amount) {
    score += amount;
    $('#score').text(score);
  };
  
  var startGame = function () {
    if (!interval) {
      if (timeLeft === 0) {
        updateTimeLeft(10);
        updateScore(-score);
      }
      interval = setInterval(function () {
        updateTimeLeft(-1);
        if (timeLeft === 0) {
          clearInterval(interval);
          interval = undefined;
        }
      }, 1000);  
    }
  };

  
  
  var addition = function (a, b) {
    $('#equation').html(a + ' + ' + b)
  }
  var subtraction = function (a, b) {
    if (b > a) {
      $('#equation').html(b + ' - ' + a);
    } else {
      $('#equation').html(a + ' - ' + b);
    }
  }
  var multiplication = function (a, b) {
    $('#equation').html(a + ' x ' + b);
  }
  var division = function (a, b) {
    $('#equation').html(a + ' / ' + b);
  }

  var questionGenerator = function () {
    var question = {};
    var num1 = randomNumberGenerator(10);
    var num2 = randomNumberGenerator(10);
  
  };

 function checkIf() {
  if (addition.checked == 1) {
    alert('yes')
  } else {
    alert('no')
  };
 };
 checkIf();


  var renderNewQuestion = function () {
    currentQuestion = questionGenerator();
    $('#equation').text(currentQuestion.equation);  
  };
  
  var checkAnswer = function (userInput, answer) {
    if (userInput === answer) {
      renderNewQuestion();
      $('#user-input').val('');
      updateTimeLeft(+1);
      updateScore(+1);
    }
  };
  
  $('#user-input').on('keyup', function () {
    checkAnswer(Number($(this).val()), currentQuestion.answer);
  });
  $('#user-input').on('click', function () {
    startGame();
  });
  
  renderNewQuestion();
});