let errMessage1 = document.getElementById("msg-1");
let errMessage2 = document.getElementById("msg-2");
let errMessage3 = document.getElementById("msg-3");

// console.log(errMessage1,errMessage2)
let guessedNum = [];
let chance = 10;
let count = 0;
const randomNumber = Math.floor(Math.random() * 50) + 1;
console.log(randomNumber);

let guess = () => {
  count += 1;
  chance -= 1;
  console.log(chance);
  let userGuess = Number(document.querySelector(".guess").value);
  if (userGuess === randomNumber) {
    errMessage1.textContent = `Congratulations! You Won in ${count} time!`;
    errMessage1.style.color = '#fff';
    
  } else {
    if (userGuess < 0 || userGuess > 50) {
      errMessage1.textContent = `Please guess number is between 0 to 50`;
    } else if (userGuess > randomNumber) {
      errMessage1.textContent = `သင့်number က 'များ'နေပါတယ်။ထပ်ကြိုးစားကြည့်ပါဦး^^`;
    } else if (userGuess < randomNumber) {
      errMessage1.textContent = `သင့်numberက'နည်း'နေပါတယ်။ထပ်ကြိုးစားကြည့်ပါဦး^^`;
    }
  }
  guessedNum.push(userGuess);
  errMessage2.textContent = "ထပ်ကြိုးစားခွင့် : " + chance + " ကြိမ်";
  errMessage3.textContent = "ခန့်မှန်းပြီးတဲ့ number : "+guessedNum;
  document.querySelector(".guess").value = "";
};
