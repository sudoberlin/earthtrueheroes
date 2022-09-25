const checkbox = document.querySelector("input[type='checkbox']");
function checking(){
  if(checkbox.checked){
    document.body.style.backgroundColor = "#00af91";
  }
  else{
    document.body.style.backgroundColor = "#4a3933";
  }
}



var playing = false;
var beforeQuiz = true;
var quizAtSeconds = 8;

$('video').attr('controls', true).get(0).play();

$('video').on('play', function() {
  playing = true;
});

$('video').on('pause ended', function() {
  playing = false;
});

$('video').on('timeupdate', function(e) {
  if (this.currentTime < quizAtSeconds) {
    beforeQuiz = true;
  } else if (beforeQuiz && this.currentTime >= quizAtSeconds) {
    beforeQuiz = false;
    if (playing) {
      showQuiz();
    }
  }
});

function showFeedback(){

    $('#feedback').show();
}

function showQuiz() {
  // $('#question-prompt').html('Q1')
  $('video').removeAttr('controls').get(0).pause();
  $('#question').show();
  $('#feedback').hide();
  $('#quiz').show();
}

function closedfaucet(){

    $('#rightdecision').show();
    // setTimeout(closedfaucet, 2000)
    endQuiz()
}

// function submitAnswer() {
//   $('#question').hide();
//   $('#feedback').show();
// }

// $('.answer').on('click', submitAnswer);

function endQuiz() {
  $('video').attr('controls', true).get(0).play();
  $('#quiz').hide();
}

$('#continue').on('click', endQuiz);

