function findLanguage(stackAnswer, companyAnswer, stabilityAnswer, bracketsAnswer, endUserAnswer){
  var CSS, C#, Java, PHP, Ruby;

  if(stackAnswer === 'Front-end'){
    CSS+=5;
  }

  if(companyAnswer === 'Small'){
    Ruby+=2;
  } else if(companyAnswer === 'Large'){
    C#++;
    Java++;
  }

  if(stabilityAnswer === 'Established'){
    C#+=2;
    Java++;
  } else if(stabilityAnswer === 'New'){
    Ruby+=2;
  }

  bracketsAnswer = parseInt(bracketsAnswer);
  Java += bracketsAnswer;

  if(endUserAnswer === 'Yes'){
    Ruby+=2;
    PHP-=2;
  }else if(endUserAnswer === 'No'){
    PHP+=2;
    Ruby-=2;
  }

  // find max value
  var max = CSS;
  var result = 'CSS';
  if(C# > max){
    max = C#;
    result = 'C#';
  }
  if(Java > max){
    max = Java;
    result = 'Java';
  }
  if(PHP > max){
    max = PHP;
    result = 'PHP';
  }
  if(Ruby > max){
    max = PHP;
    result = 'PHP';
  }

  return result;
}

$(document).ready(function(){
  $('button#submit').click(function(){
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
