// Javascript (important I need a solution in this code)


function checkQuestion(questionName, answerID) {
    if(questionName == null || answerID == null) return;
  
    const answer = document.getElementById(answerID);
    const question = document.querySelector(`input[name="${questionName}"]:checked`);
  
    if(answer == null || question == null) return;
  
    return answer.id === question.id;
  }
  function updateScore(name, score, isCorrect) {
    if(isCorrect == null) return score;
  
    if(isCorrect) {
      document.querySelectorAll(`input[name="${name}"]:not(:checked)`).forEach(input => input.disabled = true);
      return score + 1;
    }
   
  
    return score;
  }
  
  function check() {
    let score = 0;
  
    // question no1
    const nameQ1 = 'founder'
    const validQ1 = checkQuestion(nameQ1, 'q1_o1');
    score = updateScore(nameQ1, score, validQ1);
  
    // question no2
    const nameQ2 = 'national_poet';
    const validQ2 = checkQuestion(nameQ2, 'q2_o2');
    score = updateScore(nameQ2, score, validQ2);
  
    // question no3
    const nameQ3 = 'anthem_poet'
    const validQ3 = checkQuestion(nameQ3, 'q3_o1');
    score = updateScore(nameQ3, score, validQ3);
  
    // question no4
    const nameQ4 = 'national_animal'
    const validQ4 = checkQuestion(nameQ4, 'q4_o3');
    score = updateScore(nameQ4, score, validQ4);
  
    // question no5
    const nameQ5 = 'pm';
    const validQ5 = checkQuestion(nameQ5, 'q5_o1');
    score = updateScore(nameQ5, score, validQ5);
  
    // question no6
    const nameQ6 = 'pk_sq_km'
    const validQ6 = checkQuestion(nameQ6, 'q6_o3');
    score = updateScore(nameQ6, score, validQ6);
  
    // question no7
    const nameQ7 = 'first_PM';
    const validQ7 = checkQuestion(nameQ7, 'q7_o1');
    score = updateScore(nameQ7, score, validQ7);
  
    // question no8
    const nameQ8 = 'first_Capital';
    const validQ8 = checkQuestion(nameQ8, 'q8_o2');
    score = updateScore(nameQ8, score, validQ8);
  
    // question no9
    const nameQ9 = 'first_womanPM';
    const validQ9 = checkQuestion(nameQ9, 'q9_o1');
    score = updateScore(nameQ9, score, validQ9);
  
    // question no9
    const nameQ10 = 'founder2';
    const validQ10 = checkQuestion(nameQ10, 'q10_o1');
    score = updateScore(nameQ10, score, validQ10);
  
    //display result
    const ab = document.querySelector('.ab') || ((e) => {
      e.classList.add('ab');
      document.body.appendChild(e)
      return e;
    })(document.createElement("h3"));
    ab.innerText = score*10+"%";
  }
var footer = document.createElement("p");
footer.classList.add('rabt');
footer.innerText = "Hello World";
