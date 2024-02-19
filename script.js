let result = document.getElementById('result');

function addToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function deleteDigit() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  result.value = eval(result.value);
}
