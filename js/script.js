function findLanguage(stackAnswer, companyAnswer, stabilityAnswer, bracketsAnswer, endUserAnswer){
  var CSSval = 0;
  var Csharp = 0;
  var Java = 0;
  var PHPval = 0;
  var Ruby = 0;

  if(stackAnswer === 'Front-end'){
    CSSval+=5;
  }

  if(companyAnswer === 'Small'){
    Ruby+=2;
  } else if(companyAnswer === 'Large'){
    Csharp++;
    Java++;
  }

  if(stabilityAnswer === 'Established'){
    Csharp+=2;
    Java++;
  } else if(stabilityAnswer === 'New'){
    Ruby+=2;
  }

  bracketsAnswer = parseInt(bracketsAnswer);
  Java += bracketsAnswer;

  if(endUserAnswer === 'Yes'){
    Ruby+=2;
    PHPval-=2;
  }else if(endUserAnswer === 'No'){
    PHPval+=2;
    Ruby-=2;
  }
  console.log(CSSval);
  console.log(Csharp);
  console.log(Java);
  console.log(PHPval);
  console.log(Ruby);
  // find max value
  var max = CSSval;
  var result = 'CSS';
  if(Csharp > max){
    max = Csharp;
    result = 'C#';
  }
  if(Java > max){
    max = Java;
    result = 'Java';
  }
  if(PHPval > max){
    max = PHPval;
    result = 'PHP';
  }
  if(Ruby > max){
    max = PHPval;
    result = 'Ruby';
  }

  return result;
}

$(document).ready(function(){
  $('#submit').click(function(){
    var stackAnswer = $('#stack').val();
    var companyAnswer = $('#size').val();
    var stabilityAnswer = $('#stability').val();
    var bracketsAnswer = $('#brackets').val();
    var endUserAnswer = $('#endUser').val();

    var result = findLanguage(stackAnswer, companyAnswer, stabilityAnswer, bracketsAnswer, endUserAnswer);

    $('#languageOutput').text(result);
    $('.output').show();
  })
})
