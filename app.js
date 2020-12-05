const delivered = document.querySelector('#passedWord');
const button = document.querySelector('#submitBtn');
const typedWord = document.querySelector('#typedWords');

button.addEventListener('click', submitBtn);

function submitBtn(e) {
  if (typedWord.value === '') {
    alert('Please type a word!!');
  } else {
    delivered.innerText = typedWord.value;
  }
  typedWord.value = '';
  e.preventDefault();
}
