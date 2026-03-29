let errMessage1 = document.getElementById("msg-1");
let errMessage2 = document.getElementById("msg-2");
let errMessage3 = document.getElementById("msg-3");
let btn_1 = document.getElementById("btn-1");
let btn_2 = document.getElementById("btn-2");


// console.log(errMessage1,errMessage2)
let guessedNum = [];
let chance =5;
let count = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let guess = () => {
  count += 1;
  chance -= 1;
  console.log(chance);
  let userGuess = Number(document.querySelector(".guess").value);
  if (userGuess === randomNumber) {
    errMessage1.textContent = `Congratulations! You Won in ${count} time!`;
    errMessage1.style.color = '#fff';
    btn_1.disabled = "true";
    
  } else {
    if (userGuess < 0 || userGuess > 100) {
      errMessage1.textContent = `Please guess number is between 0 to 100`;
    } else if (userGuess > randomNumber) {
      errMessage1.textContent = `သင့်number က 'များ'နေပါတယ်။ထပ်ကြိုးစားကြည့်ပါဦး^^`;
    } else if (userGuess < randomNumber) {
      errMessage1.textContent = `သင့်numberက'နည်း'နေပါတယ်။ထပ်ကြိုးစားကြည့်ပါဦး^^`;
    }
  }
  if (chance <= 0) {
      errMessage1.textContent = `Game Over! ၁၀ကြိမ်ပြည့်သွားပါပြီ။ Restart ပြန်လုပ်ပါ။`;
      btn_1.disabled = "true";
    }
  guessedNum.push(userGuess);
  errMessage2.textContent = "ထပ်ကြိုးစားခွင့် : " + chance + " ကြိမ်";
  errMessage3.textContent = "ခန့်မှန်းပြီးတဲ့ number : "+guessedNum;
  document.querySelector(".guess").value = "";
};
let restart = () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  chance = 5;
  count = 0;
  guessedNum =[];
  errMessage2.textContent = "ထပ်ကြိုးစားခွင့် : ";
  errMessage3.textContent = "ခန့်မှန်းပြီးတဲ့ number : ";
  errMessage1.textContent = "";
  btn_1.disabled = false ;
  document.querySelector(".guess").value = "";
}
