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

const nextButton = document.getElementById("behavioral-next-button");
const submitButton = document.getElementById("behavioral-submit-button");
const buttons = [document.getElementById("buttonOne"), document.getElementById("buttonTwo"), document.getElementById("buttonThree"), document.getElementById("buttonFour")];
const transitionButtons = [
  document.getElementById("transitionButtonOne"),
  document.getElementById("transitionButtonTwo"),
  document.getElementById("transitionButtonThree"),
  document.getElementById("transitionButtonFour"),
];
const dragField = document.getElementById("dragparent");

let currentStep = 1;
let transitionSlot = [];
let initialSlot = [];
let finalResult = {};

let count = 0;

function displayQuestions(step, reoccurring) {
  for (let i = 0; i < 4; i++) {
    if (!reoccurring) {
      initialSlot.push(behavioralQuestions[step][i]);
    }

    if (initialSlot[i]) {
      buttons[i].className = "p-3 list-group-behavioral custom-border mt-4";
      buttons[i].onclick = () => {
        chooseQuestion(buttons[i]);
      };
    }

    buttons[i].innerHTML = initialSlot[i];
    buttons[i].className = "p-3 list-group-behavioral custom-border mt-4";

    if (!initialSlot[i]) {
      buttons[i].innerHTML = "";
      buttons[i].className = "p-3 list-group-behavioral mt-4 custom-border-disabled";
      buttons[i].onclick = () => {
        return;
      };
    }
  }
}

function displayTransitionQuestions(toRemove, arrayToDisplay) {
  // transitionSlot.push(text);

  if (toRemove) {
    transitionSlot = transitionSlot.filter((item) => {
      return item !== toRemove;
    });
  }

  for (let i = 0; i < 4; i++) {
    if (arrayToDisplay) {
      transitionSlot = arrayToDisplay;
    }
    if (transitionSlot[i]) {
      transitionButtons[i].innerHTML = transitionSlot[i];
      transitionButtons[i].className = "p-3 list-group-behavioral custom-border-transition mt-4";
    }

    if (!transitionSlot[i]) {
      transitionButtons[i].innerHTML = "";
      transitionButtons[i].className = "p-3 list-group-behavioral custom-border-transition mt-4";
    }
  }

  // add
  if (transitionSlot.length < 5) {
    transitionSlot.forEach((text, index) => {
      transitionButtons[index].innerHTML = text;
      transitionButtons[index].classList.remove("custom-border-transition");
      transitionButtons[index].classList.add("custom-border-transition-change");
    });
  }
}

displayQuestions(currentStep);

function chooseQuestion(choice) {
  // remove left side
  initialSlot = initialSlot.filter((item) => {
    return item !== choice.innerHTML;
  });

  // go to right side

  transitionSlot.push(choice.innerHTML);

  displayTransitionQuestions();
  displayQuestions(currentStep, true);

  if (transitionSlot && transitionSlot.length === 4) {
    nextButton.disabled = false;
  }
}

const initialOrder = Array.from(dragparent.children).map((child) => child.id);

// Restore initial order function
function restoreInitialOrder() {
  initialOrder.forEach((id) => {
    const item = document.getElementById(id);
    dragparent.appendChild(item);
  });
}

function showNextQuestions() {
  // increse count of currentStep +1 IF certain condition is made. which is all answers are selected and put into the array/object.
  // if selectedQuestions[currentStep] consists 4 values in it, THEN currentStep += 1

  // grab the LAST four orders of the selectedQuestions and save it that way.

  let children = dragparent.querySelectorAll("li");
  transitionSlot = [];

  children.forEach((child) => {
    console.log(child.innerHTML);
    transitionSlot.push(child.innerHTML);
  });

  finalResult[currentStep] = transitionSlot;

  prepareForNextQuestion();

  currentStep += 1;

  if (transitionSlot && transitionSlot.length === 4) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }

  // save it the answers to the main data

  let condition;

  if (finalResult[currentStep]) {
    condition = true;
  }

  displayQuestions(currentStep, condition);
  displayTransitionQuestions(false, finalResult[currentStep]);

  restoreInitialOrder();

  // always keep at end to check for next button enablement

  console.log(finalResult);

  if (transitionSlot.length !== 4) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function removeQuestion(question) {
  if (question.innerHTML) {
    // it should turn back to the left side
    // remove the right side.

    initialSlot.push(question.innerHTML);

    displayQuestions(currentStep, true);
    displayTransitionQuestions(question.innerHTML);

    // always keep at end
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
        console.log("lol");
        console.log(transitionSlot);
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
  document.querySelectorAll(".custom-border-transition-change").forEach((button) => {
    button.innerHTML = "";
    button.className = "p-3 list-group-behavioral custom-border-transition mt-4";
  });

  buttons.forEach((button) => {
    button.classList.remove("disabled");
  });

  count = 0;
  transitionSlot = [];
}

function checkForNext() {
  if (transitionSlot && transitionSlot.length === 4) {
    return true;
  }
}

function goBack() {
  if (currentStep === 1) {
    return;
  }

  console.log("yes", finalResult);

  initialSlot = [];

  currentStep -= 1;

  transitionSlot = finalResult[currentStep];

  displayTransitionQuestions(false, finalResult[currentStep]);
  displayQuestions(currentStep, true);
  // console.log(initialSlot);

  console.log(finalResult[currentStep].length);

  // must keep it at the end to check for next button
  if (finalResult[currentStep].length !== 4) {
    console.log("WHUIAWTHUIOAWJTOI");
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}
