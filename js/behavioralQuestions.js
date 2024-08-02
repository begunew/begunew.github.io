const behavioralQuestions = {
  1: ["Broad-minded, receptive, open", "Self-Controlled, strong-willed", "Accommodating, helpful", "Sunny disposition, joyful"],
  2: ["Charming, pleasing, delightful", "Easily led, follower", "Steadfast, faithful", "Fearless, daring, brave"],
  3: ["Brazen, risk-taker", "Diplomatic, tactful", "Refined, smooth talker", "Satisfied, content, pleased"],
  4: ["Credible, persuasive", "Original, creative, individualistic", "Gentle, pleasant, agreeable", "Self-restrained, modest, humble"],
  5: ["Calm, peaceful, composed", "Contented, satisfied", "Trusting, faith in others", "Confident, certain, head-strong"],
  6: ["Agreeable, willing", "Impatient, intense, anxious", "Consenting, will go along with", "High-spirited, lively, optimistic"],
  7: ["Accurate, exact, skillful", "Merry, jolly, joking", "Nervy, courageous, brazen", "Even-tempered, calm, good natured"],
  8: ["Timid, shy, quiet", "Brave, fearless, courageous", "Inspiring, stimulating, motivating", "Submissive, yielding, gives in"],
  9: ["Neighborly, friendly", "Unsatisfied, restless, unable to rest or relax", "Popular, liked by many or most people", "Organized, neat and orderly"],
  10: ["Unemotional, reserved, controlled", "Outspoken, directly and boldly", "Accurate, perfectionistic", "Easy to talk to, outgoing"],
  11: ["Well-disciplined, self-controlled", "Benevolent, willing to share, generous", "Lively, animated, gesturing", "Relentless, refuses to quit, persistent"],
  12: ["Unbeatable, determined", "Compliant, will do as told, dutiful", "Ill tempered, hard to please, fussy", "Playful, frisky, full of fun"],
  13: ["Adaptable, flexible", "Argumentative, quarrelsome, confrontive", "Casual, indifferent, not easily excited", "Cheerful, light-hearted, carefree"],
  14: ["Accommodating, ready to help.", "Optimistic, expecting the best", "Respectful, conscientious", "Pioneering, originator, initiator"],
  15: ["Congenial, enjoys the company of others", "Self-Directed, independent minded", "Forgiving, Patient, steady, broadminded", "Soft-spoken, mild, restrained"],
  16: ["Convincing, credible", "Good-natured, pleasing, nice", "Determined, unwavering, focused", "Cautious, restrained, careful"],
  17: ["Compatible, agreeable", "Competitive, aggressive, ambitious", "Considerate, attentive to others, caring", "Fun-loving, lighthearted, cheerful"],
  18: ["Adventuresome, willing to take chances", "Polite, inviting, warm, friendly", "Not excessive, avoids extremes", "Receptive, open to ideas"],
  19: ["Controlled, reserved", "Decisive, relentless, quick to act", "Predictable, habitual, repetitive", "Talkative, communicative"],
  20: ["Resigned, renounced, given up", "Force of character, potent, strong willed", "Admirable, held in esteem", "Tender, considerate, willing to give or help"],
  21: ["Consistent, Level-headed", "Sociable, life of the party, entertaining", "Aggressive, challenger, person of action", "Fearful, worrier"],
  22: ["Cooperative, willing to work together", "Charismatic, charming", "Sweet, pleasing", "Stubborn, resistant, tenacious"],
  23: ["Informed, knowledgeable, cultured", "Always on the move, energetic", "Lenient, permissive, not strict", "Enjoys group activity, social"],
  24: ["Respect for other's rights or perspective", "Compassionate, understanding", "Assertive, combative, aggressive", "Self-assured, confident, capable"],
};

let nextButton = document.getElementById("behavioral-next-button");
let resetButton = document.getElementById("behavioral-reset-button");
let submitButton = document.getElementById("behavioral-submit-button");
let buttons = [document.getElementById("buttonOne"), document.getElementById("buttonTwo"), document.getElementById("buttonThree"), document.getElementById("buttonFour")];
let transitionButtons = [document.getElementById("transitionOne"), document.getElementById("transitionTwo"), document.getElementById("transitionThree"), document.getElementById("transitionFour")];
let dragField = document.getElementById("dragparent");

function displayQuestions(step) {
  for (let i = 0; i < 4; i++) {
    buttons[i].innerHTML = behavioralQuestions[step][i];
  }
}

function displayTransitionQuestions(text) {
  // <li class="list-group-item p-3 list-group-behavioral" onclick="removeQuestion(this)" style="height: 3.5rem; width: 33rem;" id="transitionOne"></li>

  let li = document.createElement("li");
  li.className = "list-group-item p-3 list-group-behavioral transitionButtons";
  li.onclick = () => {
    removeQuestion(li);
  };
  li.innerHTML = text;

  dragField.appendChild(li);
}

let currentStep = 1;

displayQuestions(currentStep);

let selectedQuestions = {};

let count = 0;

function chooseQuestion(choice) {
  if (selectedQuestions[currentStep] && selectedQuestions[currentStep].includes(choice.innerHTML)) {
    return;
  }

  if (!selectedQuestions[currentStep]) {
    selectedQuestions[currentStep] = [];
  }

  selectedQuestions[currentStep].push(choice.innerHTML);

  // change the innerHTML of the transition side
  displayTransitionQuestions(selectedQuestions[currentStep][count]);

  // transitionButtons[count].innerHTML = selectedQuestions[currentStep][count];
  count += 1;

  // disable the specific button from being pressed again
  document.getElementById(choice.id).classList.add("disabled");

  if (selectedQuestions[currentStep] && selectedQuestions[currentStep].length === 4) {
    nextButton.disabled = false;
  }
}

function showNextQuestions() {
  // increse count of currentStep +1 IF certain condition is made. which is all answers are selected and put into the array/object.
  // if selectedQuestions[currentStep] consists 4 values in it, THEN currentStep += 1

  // grab the LAST four orders of the selectedQuestions and save it that way.

  prepareForNextQuestion();

  currentStep += 1;

  if (selectedQuestions[currentStep] && selectedQuestions[currentStep].length == 4) {
    console.log(selectedQuestions[currentStep]);
    console.log("begin", currentStep);
    console.log("false");

    nextButton.disabled = false;
  } else {
    console.log("true");
    nextButton.disabled = true;
  }

  displayQuestions(currentStep);
  console.log("end", currentStep);

  // and if currentStep did successfuly go +1, then change innerHTML of the buttons to next Q.
}

function removeQuestion(question) {
  if (question.innerHTML) {
    buttons.forEach((button) => {
      if (button.innerHTML == question.innerHTML) {
        button.classList.remove("disabled");

        selectedQuestions[currentStep] = selectedQuestions[currentStep].filter((item) => item !== button.innerHTML);

        count -= 1;
      }
    });
    question.remove();

    if (!checkForNext()) {
      nextButton.disabled = true;
    }
  }
}

// initialize the drag and drop
function drag() {
  // only draggable if there's innerHTML.

  dragula([document.querySelector("#dragparent")], {
    moves: (el) => {
      // IF if there's innerHTML.
      if (el.innerHTML) {
        return true;
      }
      // console.log(el);
      return false;
    },
    accepts: (el, target, source, sibling) => {
      // console.log(el, target, source, sibling);
      if (el.innerHTML && target.innerHTML && source.innerHTML) {
        return true;
      }
      return false;
    },
  });
}

function submit() {
  console.log("submit");
}

// reset squad
function prepareForNextQuestion() {
  document.querySelectorAll(".transitionButtons").forEach((button) => {
    button.remove();
  });

  buttons.forEach((button) => {
    button.classList.remove("disabled");
  });

  count = 0;
}

// unnecessary due to having the X button to remove each question and drag and drop.
// function resetQuestions() {
//   // transitionButtons innerHTML =""
//   // enable the left side buttons

//   document.querySelectorAll(".transitionButtons").forEach((button) => {
//     button.remove();
//   });

//   buttons.forEach((button) => {
//     button.classList.remove("disabled");
//   });

//   count = 0;

//   selectedQuestions[currentStep] = [];

//   if (!checkForNext()) {
//     nextButton.disabled = true;
//   }
// }

function checkForNext() {
  if (selectedQuestions[currentStep] && selectedQuestions[currentStep].length === 4) {
    return true;
  }
}
