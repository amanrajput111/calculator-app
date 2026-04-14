let display = document.getElementById('display');
let currentInput = '';
let resultShown = false;


function appendNumber(number){
    if(resultShown){
        currentInput = '';
        resultShown = false
    }
    currentInput += number;
    resultShown = false
    updateDisplay();
}

function appendOperator(operator){
    if(currentInput === '' )return;
    if(/[+\-*/%]$/.test(currentInput)){

    currentInput = currentInput.slice(0,-1)
}
    currentInput += operator;
  resultShown = false;
  updateDisplay ();

}


function appendDecimal() {
      const parts = currentInput.split(/[\+\-\*/%]/);

      const last = parts[parts.length - 1];
      if (!last.includes('.')) {
        currentInput += '.';
        updateDisplay();
      }
    }

function clearDisplay(){
    currentInput = ''
    updateDisplay ('0')
}
function deleteLast(){
    currentInput =  currentInput.slice(0 ,-1)
    updateDisplay( currentInput || '0')
}

function calculate(){
    try{
        let result = eval(currentInput)
        updateDisplay(result)
        currentInput = result.toString();
        resultShown= true;
     } catch {
        updateDisplay('Error');
        currentInput = '';
      }
}
function updateDisplay(content = currentInput){
    display.textContent = content;
}