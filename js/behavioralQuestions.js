const behavioralQuestions = {
  1: [
    "Broad-minded, receptive, open",
    "Self-Controlled, strong-willed",
    "Accommodating, helpful",
    "Sunny disposition, joyful",
  ],
  2: [
    "Charming, pleasing, delightful",
    "Easily led, follower",
    "Steadfast, faithful",
    "Fearless, daring, brave",
  ],
  3: [
    "Brazen, risk-taker",
    "Diplomatic, tactful",
    "Refined, smooth talker",
    "Satisfied, content, pleased",
  ],
  4: [
    "Credible, persuasive",
    "Original, creative, individualistic",
    "Gentle, pleasant, agreeable",
    "Self-restrained, modest, humble",
  ],
  5: [
    "Calm, peaceful, composed",
    "Contented, satisfied",
    "Trusting, faith in others",
    "Confident, certain, head-strong",
  ],
  6: [
    "Agreeable, willing",
    "Impatient, intense, anxious",
    "Consenting, will go along with",
    "High-spirited, lively, optimistic",
  ],
  7: [
    "Accurate, exact, skillful",
    "Merry, jolly, joking",
    "Nervy, courageous, brazen",
    "Even-tempered, calm, good natured",
  ],
  8: [
    "Timid, shy, quiet",
    "Brave, fearless, courageous",
    "Inspiring, stimulating, motivating",
    "Submissive, yielding, gives in",
  ],
  9: [
    "Neighborly, friendly",
    "Unsatisfied, restless, unable to rest or relax",
    "Popular, liked by many or most people",
    "Organized, neat and orderly",
  ],
  10: [
    "Unemotional, reserved, controlled",
    "Outspoken, directly and boldly",
    "Accurate, perfectionistic",
    "Easy to talk to, outgoing",
  ],
  11: [
    "Well-disciplined, self-controlled",
    "Benevolent, willing to share, generous",
    "Lively, animated, gesturing",
    "Relentless, refuses to quit, persistent",
  ],
  12: [
    "Unbeatable, determined",
    "Compliant, will do as told, dutiful",
    "Ill tempered, hard to please, fussy",
    "Playful, frisky, full of fun",
  ],
  13: [
    "Adaptable, flexible",
    "Argumentative, quarrelsome, confrontive",
    "Casual, indifferent, not easily excited",
    "Cheerful, light-hearted, carefree",
  ],
  14: [
    "Accommodating, ready to help.",
    "Optimistic, expecting the best",
    "Respectful, conscientious",
    "Pioneering, originator, initiator",
  ],
  15: [
    "Congenial, enjoys the company of others",
    "Self-Directed, independent minded",
    "Forgiving, Patient, steady, broadminded",
    "Soft-spoken, mild, restrained",
  ],
  16: [
    "Convincing, credible",
    "Good-natured, pleasing, nice",
    "Determined, unwavering, focused",
    "Cautious, restrained, careful",
  ],
  17: [
    "Compatible, agreeable",
    "Competitive, aggressive, ambitious",
    "Considerate, attentive to others, caring",
    "Fun-loving, lighthearted, cheerful",
  ],
  18: [
    "Adventuresome, willing to take chances",
    "Polite, inviting, warm, friendly",
    "Not excessive, avoids extremes",
    "Receptive, open to ideas",
  ],
  19: [
    "Controlled, reserved",
    "Decisive, relentless, quick to act",
    "Predictable, habitual, repetitive",
    "Talkative, communicative",
  ],
  20: [
    "Resigned, renounced, given up",
    "Force of character, potent, strong willed",
    "Admirable, held in esteem",
    "Tender, considerate, willing to give or help",
  ],
  21: [
    "Consistent, Level-headed",
    "Sociable, life of the party, entertaining",
    "Aggressive, challenger, person of action",
    "Fearful, worrier",
  ],
  22: [
    "Cooperative, willing to work together",
    "Charismatic, charming",
    "Sweet, pleasing",
    "Stubborn, resistant, tenacious",
  ],
  23: [
    "Informed, knowledgeable, cultured",
    "Always on the move, energetic",
    "Lenient, permissive, not strict",
    "Enjoys group activity, social",
  ],
  24: [
    "Respect for other's rights or perspective",
    "Compassionate, understanding",
    "Assertive, combative, aggressive",
    "Self-assured, confident, capable",
  ],
};

let buttonField = document.getElementById("behavioral-button-field");
let transitionField = document.getElementById("behavioral-transition-field");
let nextButton = document.getElementById("behavioral-next-button");
let resetButton = document.getElementById("behavioral-reset-button");
let submitButton = document.getElementById("behavioral-submit-button");

let currentButtons = [];

const displayQuestions = () => {
  for (const [key, value] of Object.entries(behavioralQuestions)) {
    const buttons = [0, 1, 2, 3];
    const h1 = [0, 1, 2, 3];

    for (let i = 0; i < 4; i++) {
      buttons[i] = document.createElement("button");
      buttons[i].className = "btn btn-primary btn-block mt-3 behavioral-step";
      buttons[i].onclick = (e) => {
        sendToTransition(e);
      };
      buttons[i].innerHTML = value[i];

      h1[i] = document.createElement("h1");
    }

    buttons.forEach((button, index) => {
      h1[index].appendChild(button);
    });

    h1.forEach((h1) => {
      buttonField.appendChild(h1);
    });
  }
};

displayQuestions();

//

let currentStep = 0;
const steps = document.querySelectorAll(".behavioral-step");
const totalSteps = steps.length;

for (let i = 0; i < 4; i++) {
  steps[i].className = "btn btn-primary btn-block mt-3 behavioral-step:active ";
  steps[i].id = `behavioral-button-${i}`;
}

// go next question
let showNextQuestions = () => {
  if (currentStep == 92) {
    //next button disabled, submit button appears
    nextButton.disabled = true;
    submitButton.className = "btn btn-secondary deactivated-button:active";

    return;
  }

  for (let i = 0; i < 4; i++) {
    steps[currentStep + i].className =
      "btn btn-primary btn-block mt-3 behavioral-step";
    steps[currentStep + i].id = "";
  }

  currentStep = (currentStep % totalSteps) + 4;

  for (let i = 0; i < 4; i++) {
    steps[currentStep + i].className =
      "btn btn-primary btn-block mt-3 step:active";
    steps[currentStep + i].id = `behavioral-button-${currentStep + i}`;
  }

  console.log(totalSteps);
};

let submit = () => {
  console.log("submit");
};

let resetQuestions = () => {
  // remove the transition (right) side buttons
  transitionField.innerHTML = "";

  let allActiveButtons = document.querySelectorAll(".behavioral-step\\:active");

  // reset the disabled buttons on the left
  allActiveButtons.forEach((button) => {
    button.disabled = false;
  });

  // reset the stored buttons in buttonsOnTransition
  buttonsOnTransition = [];
};

// to store all the buttons on the transition side
let buttonsOnTransition = [];

let sendToTransition = (selectedButton) => {
  let buttonId = selectedButton.target.id;

  buttonsOnTransition.push(buttonId);

  document.getElementById(buttonId).disabled = true;

  let orderedButton = document.createElement("button");
  orderedButton.draggable = true;
  orderedButton.className =
    "btn btn-primary btn-block mt-3 behavioral-step:active transitionButton";
  orderedButton.onclick = (e) => {
    // probably X
  };
  orderedButton.addEventListener("dragstart", (e) => {
    let selectedButton = e.target;
    console.log(buttonsOnTransition);
    // get the document element for each buttons that exists in the buttonsOnTransition
    // then change the position with which where it brings it.
    const buttons = document.querySelectorAll(".transitionButton");
  });

  orderedButton.innerHTML = selectedButton.target.innerHTML;

  let h1ForOrderedButton = document.createElement("h1");

  h1ForOrderedButton.appendChild(orderedButton);

  // append to the transition field
  transitionField.appendChild(h1ForOrderedButton);
};
