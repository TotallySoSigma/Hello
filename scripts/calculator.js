//document.getElementById('n1').innerHTML = answer;
function calculate() {
    let answer = 0;
    answer = document.getElementById('answerVar').value;
    let n1 = document.getElementById('n1').value;
    let operation = document.getElementById('operation').value;
    let n2 = document.getElementById('n2').value;
    alert(n1);
    alert(operation);
    alert(n2);
    switch (operation) { 
    case "1": answer = n1 + n2; break; 
    case "2": answer = n1 - n2; break; 
    case "3": answer = n1 * n2; break; 
    case "4": answer = n1 / n2; break; }
    document.getElementById('answerVar').value = answer
    
} 