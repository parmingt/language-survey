function findLanguage(stackAnswer, companyAnswer, stabilityAnswer, bracketsAnswer, endUserAnswer){
  var css = 0;
  var csharp = 0;
  var java = 0;
  var php = 0;
  var ruby = 0;

  if(stackAnswer === 'Front-end'){
    css+=5;
  }

  if(companyAnswer === 'Small'){
    ruby+=2;
  } else if(companyAnswer === 'Large'){
    csharp++;
    java++;
  }

  if(stabilityAnswer === 'Established'){
    csharp+=2;
    java++;
  } else if(stabilityAnswer === 'New'){
    ruby+=2;
  }

  bracketsAnswer = parseInt(bracketsAnswer);
  java += bracketsAnswer;

  if(endUserAnswer === 'Yes'){
    ruby+=2;
    php-=2;
  }else if(endUserAnswer === 'No'){
    php+=2;
    ruby-=2;
  }

  // find max value
  var max = css;
  var result = 'CSS';
  if(csharp > max){
    max = csharp;
    result = 'C#';
  }
  if(java > max){
    max = java;
    result = 'Java';
  }
  if(php > max){
    max = php;
    result = 'PHP';
  }
  if(ruby > max){
    max = ruby;
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
