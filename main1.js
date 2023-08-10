
const persianKeyboardLetters = [
  "ض",
  "ص",
  "ث",
  "ق",
  "ف",
  "غ",
  "ع",
  "ه",
  "خ",
  "ح",
  "ج",
  "چ",
  "ش",
  "س",
  "ی",
  "ب",
  "ل",
  "ا",
  "ت",
  "ن",
  "م",
  "ک",
  "گ",
  "ظ",
  "ط",
  "ز",
  "ر",
  "و",
  "ذ",
  "پ",
  "د",
];

const questions = [
  
  {
    question: "کمربند زمین",
    answer: "استوا"
  },
  {
    question: "سلاح صبور",
    answer: "مین"
  },
 
  {
    question: "قمر مصنوعی",
    answer: "ماهواره"
  },
  {
    question:"عمیق ترین دریاچه جهان",
    answer: "بایکال"
  },
 
  {
    question:"حشره ای که بشترین طول عمر را دارد",
    answer: "موریانه"
  },
  {
    question:"بزرگترین کشور در باختر آسیا ",
    answer: "عربستان"
  },
  {
    question: " جانوری با خون ابی",
    answer: "میگو"
  },
  {
    question: "بانک خونگی",
    answer: "قلک"
  },
  {
    question: " موجودی سه قلب",
    answer: "اختاپوس"
  },
{
  question: "جانوری ک مغز ندارد",
    answer: "ستارهدریایی"
}

];



let step = 0
let chanceCount = 5

let chance = document.getElementById("chance")
chance.textContent = chanceCount


let letterContainer = document.getElementById("letter-container")
for (let item of persianKeyboardLetters) {
  const button = document.createElement("button")
  button.className = "input-button"
  button.onclick = keyClickHandler
  button.textContent = item
  letterContainer.appendChild(button)
}



let hint = document.getElementById("hint")
hint.textContent = questions[step].question


let inputSection = document.getElementById("user-input-section")
for (const letter of questions[step].answer) {
  const letterInput = document.createElement("div")
  letterInput.classList = "answer-input"
  inputSection.append(letterInput)
}




let answerCount = 0
let boxes = []


const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387")
const buttons = document.getElementsByClassName("input-button")

for (const button of buttons) {
  button.addEventListener("click", () => {
    audio.currentTime = 0
    audio.play()
  });
}


function fail(){
document.getElementById("true").innerHTML="جواب درست"+"'"+questions[step].answer+"'"+"بود"
  const failAudio = document.getElementById("faild-audio")
  failAudio.currentTime=0
  failAudio.play()
  setTimeout(() => {
    window.location.reload()
  }, 3500);
  $(document).ready(function () {

    $(".gameover").toggleClass("gameover1")

  })
}



function keyClickHandler(event) {
  const message = document.getElementById("message")

  let chance = document.getElementById("chance")

  if (event.currentTarget.textContent == questions[step].answer[answerCount]) {
    message.style.color = "green"
    message.textContent = "درست"
    setTimeout(() => {
      message.textContent = ""
    }, 400);
  } else {

    if (chance.textContent == 0) {
      fail()
      return
    }
    message.style.color = "red"
    message.textContent = "غلط"
    setTimeout(() => {
      message.textContent = ""
    }, 400);
    chance.textContent = chance.textContent- 1
    return
  }


  if (answerCount <= inputSection.children.length) {
    const target = event.currentTarget
    const targetAnswerinput = inputSection.children[answerCount]
    targetAnswerinput.textContent = target.textContent
    boxes.push(target.textContent)
    answerCount++;
  }
  const answer = questions[step].answer
  if (answerCount == inputSection.children.length) {
    next()
  }
}


const help = document.getElementById("help")
help.onclick = helpHandler

//when user want help
function helpHandler(){
  const targetAnswerinput = inputSection.children[answerCount]
  let chance = document.getElementById("chance")
  if(chance.textContent > 0){
    chance.textContent = chance.textContent -1
    targetAnswerinput.textContent = questions[step].answer[answerCount]
    answerCount++
    if (answerCount == inputSection.children.length) {
      next()
    }
  }else{

      

  }
  
}



function next() {

  step++
  hint = document.getElementById("hint")
  hint.textContent = questions[step].question


  inputSection = document.getElementById("user-input-section")
  inputSection.innerHTML = ""
  for (const letter of questions[step].answer) {
    const letterInput = document.createElement("div")
    letterInput.classList = "answer-input"
    inputSection.append(letterInput)
  }


  answerCount = 0
  boxes = []
  endgame()

}

function endgame(){
if(step==10){
  window.location.reload()
}
}





$(document).ready(function () {
  $(".button-74 ").click(function () {
    $(".startsection").toggleClass("startsection1")
  })

  $("#help").hover(function(){
    $(".helpinfo").toggleClass("helpinfo1")

  })

})

