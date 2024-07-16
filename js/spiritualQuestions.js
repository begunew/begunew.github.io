const questions = {
  "1": "I've discovered I can challenge others without them feeling condemned.",
  "2": "Speaking in different tongues/languages happens after salvation.",
  // @* It doesn't make sense to answer in frequency -->
  "3": "When God gives me insight I feel compelled to share it: regardless.",
  "4":
    "I have a strong desire to take the gospel to where it has never been heard.",
  "5": "I have a prayer language that I do not (intellectually) understand.",
  "6": "God has given me favor and drawn others to me for spiritual direction.",
  "7": "Preparing for others to visit my home is exciting and exhilarating.",
  "8":
    "There is a freedom when I speak in spiritual languages that I normally do not have.",
  "9": "My instruction has provided Biblical insight and help to others.",
  "10":
    "I enjoy making sure tasks and projects are completed in a timely manner.",
  "11": "I find joy in completing tasks without attracting attention.",
  "12":
    "I find it quite easy to believe that what God says is true and reliable.",
  "13": "When I pray for other's healing: I am aware of a power beyond me.",
  "14":
    "It really does not matter who gets credit as long as other's needs are met.",
  "15":
    "Scriptures that are challenging to understand cause me to dig until I find an answer.",
  "16": "I find joy in and feel called to be at the forefront of a ministry.",
  "17":
    "I find great pleasure in simple: practical tasks that lend a helping hand.",
  "18": "God has answered my prayers by healing people that I have prayed for.",
  "19":
    "I have a nagging concern of having someone's blood on my hands if I don't share my faith.",
  "20":
    "I can see how God is shaping me to encourage and equip many spiritual leaders.",
  "21":
    "I find it challenging to see through individuals who present themselves as something they are not.",
  "22":
    "Being able to understand other tongues/languages helps me help others.",
  "23":
    "I find joy in inspiring: leading and motivating others to God's service.",
  "24": "Others look to me for ministry coordination: planning and direction.",
  "25":
    "I feel deeply burdened to help others financially: and respond by giving.",
  "26": "Others have said I present a clear and concise approach to salvation.",
  "27":
    "I am compelled to share what I have learned from scripture and studies.",
  "28":
    'I genuinely sense the emotions conveyed by the saying "it is better to give than receive."',
  "29":
    "I have seen God interrupt the natural flow of life based on my prayer.",
  "30": "I do not question my salvation or God's hold on my life.",
  "31": "A look of gratitude from another far outweighs any other gift.",
  "32": "When I pray, I see God heal people.",
  "33": "When the Holy Spirit speaks through me I feel God's presence in me",
  "34": "God uses me to provide clarity when there is confusion or indecision.",
  "35":
    "God reminds me of scripture or experiences when facing weighty decisions.",
  "36": "Entertaining others provides a great sense of satisfaction.",
  "37": "I receive great joy: peace and revelation as I study the scriptures.",
  "38": "I am consulted when others struggle with difficult decisions.",
  "39": "I have seen too many miracles in my life to discount their validity.",
  "40": "I am able to identify spiritual patterns and communicate them.",
  "41":
    "I enjoy studying to acquire information and when I do, I make good grades.",
  "42": "The Holy Spirit speaks through me when I do not know what to say.",
  "43":
    "I find great joy in ministering to the same group of people for a long time.",
  "44": "I have a great deal of compassion for those hurting or in distress.",
  "45":
    "I am able to identify when another person is motivated to act by an evil spirit.",
  "46":
    "I remember the first time I felt I understood what was said in tongues.",
  "47":
    "I have a strong burden for those who do not have the peace of salvation.",
  "48":
    "God's insight has allowed me to help others on their spiritual journey.",
  "49": "It is very rewarding for me to help others understand God's truths.",
  "50":
    "Christ alone has the words of eternal life: so there is no other place to go.",
  "51": "I have interpreted when someone spoke in tongues.",
  "52":
    "I sense a responsibility to assist or guide those who are close to me and in need of direction.",
  "53": "I can recall one or more incidents when God literally intervened.",
  "54": "God seems to provide the words others need to hear when I speak.",
  "55": "I see pain in others even when they don't express it.",
  "56":
    "I have been called to minister to multiple communities: countries and cultures.",
  "57":
    "I am able to eliminate confusion by sharing a tongue/language's meaning.",
  "58": "I feel very comfortable sharing my faith with unbelievers.",
  "59": 'I have been told that I tend to support the "underdog."',
  "60":
    "I believe God heals people and am confident prayer makes a difference.",
  "61":
    "I have an ability to be strategic and help a ministry achieve good results.",
  "62": "I am seen as an authority by others who seek a way to serve God.",
  "63":
    "I have no problem delegating what needs to be done for ministry success.",
  "64": "By speaking God's truth I don't shortchange myself or others.",
  "65": "I am able to judge truthfulness and error in a theological statement.",
  "66":
    "I relish close relationships because of the ability to nurture other's growth.",
  "67": "I push to identify the motives behind another person's words.",
  "68":
    "It is more satisfying to support a ministry need than buying something new.",
  "69": 'I do not feel "put out" by having someone stay in my home.',
  "70":
    "The more I explore the supernatural, the more profoundly I feel empowered by God.",
  "71": "God has never let me down: which is why I don't question him now.",
  "72": "I am exhilarated when sharing the gospel with many people.",
  "73":
    "I feel blessed with an ability to communicate a vision for others to follow.",
  "74":
    "I feel many people are not very optimistic as they face life's challenges.",
  "75":
    "Establishing: training and developing spiritual leaders does not intimidate me.",
  "76":
    "Digging into scriptural language: historical and social context is fun.",
  "77":
    "For some reason I know what others mean when I hear them speaking in tongues.",
  "78": "Others tell me God used me to supernaturally change their life.",
  "79": "On more than one occasion I have spoke God's truth to others.",
  "80": "My convictions inspire others and give them hope.",
  "81": "God gives me insight and answers to complicated issues.",
  "82": 'I enjoy having my home as a "gathering place" for others.',
  "83":
    "A modest lifestyle allows me to quietly contribute more to other's needs.",
  "84": "I love to proclaim God's truths: past: present and future.",
  "85":
    "I find great joy in praying for the physically: mentally or spiritually ill.",
  "86": "God has given me an innate sense of seeing spirits at work in others.",
  "87":
    "I find great satisfaction in helping those who are weak develop strength.",
  "88": "Many who visit my home seem comfortable and often linger a while.",
  "89": "I find great joy in being able to comfort those in times of crisis.",
  "90":
    "It is not forgiving others: but remaining objective that is a struggle. [should be reworded]",
  "91":
    "Mature believers have asked ask my opinions on challenging life issues.",
  "92": "In the past my words have brought conviction of sin to others.",
  "93":
    'After I counsel someone about a personal issue: they tell me they "feel better."',
  "94":
    "I believe no physical or mental boundaries can hinder my Kingdom position.",
  "95":
    "I find it gratifying to motivate and support others in their spiritual walk.",
  "96": "I feel that what I earn is a tool to insure other's needs are met.",
  "97":
    "I find acts of assistance more rewarding than speaking and/or teaching.",
  "98": "I am asked to explain scriptural principles and their application.",
  "99":
    "Organizing and ministry development give me a great sense of satisfaction.",
  "100":
    "I welcome opportunities to share my experiences and encourage others.",
};

let questionNum = document.getElementById("question_number");
let questionField = document.getElementById("question_field");

// Display the questions in the HTML field.

const displayQuestions = () => {
  for (const [key, value] of Object.entries(questions)) {
    const mainQuestion = document.createElement("div");
    mainQuestion.className = "step";

    const miniQuestion = document.createElement("div");
    miniQuestion.className = "card-body full-height";
    miniQuestion.innerHTML = value;

    const miniNum = document.createElement("div");
    miniNum.className = "card-header";
    miniNum.innerHTML = "Question " + key;

    mainQuestion.appendChild(miniNum);
    mainQuestion.appendChild(miniQuestion);

    questionField.appendChild(mainQuestion);
  }
};

displayQuestions();

// Show questions one by one.

let currentStep = 1;
const steps = document.querySelectorAll(".step");
const totalSteps = steps.length;
steps[0].className = "step:active";

// let theNum = document.getElementsByClassName("step:active");
// let finalNumber = parseInt(theNum[0].innerHTML[0]);
// console.log(finalNumber)
// questionNum.innerHTML = `Question ${finalNumber}`;

let total = {};

// get button elements
let buttons = [
  document.getElementById("btnNever"),
  document.getElementById("btnRarely"),
  document.getElementById("btnSometimes"),
  document.getElementById("btnOften"),
  document.getElementById("btnEveryday"),
];

let chosenButton = total[currentStep];

let add = (amount) => {
  // add the num to the Object total
  total[currentStep] = amount;

  const keys = Object.keys(questions);

  // Get the last key
  const lastKey = keys[keys.length - 1];

  // Stop the page and redirect to SuccessPage
  if (currentStep == lastKey) {
    // calculate the total of the assessment of array total
    let result = 0;

    for (let key in total) {
      if (total.hasOwnProperty(key)) {
        result += total[key];
      }
    }
    const data = {
      value: result,
    };

    const queryString = new URLSearchParams(data).toString();
    window.location.assign(`success.html?${queryString}`);
  }

  // hide the previous one
  steps[currentStep - 1].className = "step";

  // Increment the step counter
  currentStep = (currentStep % totalSteps) + 1;

  // Add the active class to the new current step
  steps[currentStep - 1].className = "step:active";

  // highlight the proper ones.
  highlightButtons();

  // only unhighlight IF there's none in the future
  if (total[currentStep + 1] == null) {
    unhighlightButtons();
  }
};

// unhighlight buttons
let unhighlightButtons = () => {
  if (chosenButton == null) {
    buttons.forEach((button) => {
      button.classList.remove("highlight");
    });
  }
};

// function to highlight the buttons for history
let highlightButtons = () => {
  // remove previous highlights
  buttons.forEach((button) => {
    button.classList.remove("highlight");
  });

  // add highlight class to the corresponding button
  let chosenButton = total[currentStep];

  if (chosenButton >= 0 && chosenButton < buttons.length) {
    buttons[chosenButton].classList.add("highlight");
  }
};

let left = () => {
  // if currentstep is first do not continue code
  if (currentStep == 1) {
    return;
  }

  // deactive step CSS
  steps[currentStep - 1].className = "step";

  // lower the currentStep
  currentStep = currentStep - 1;

  // activate the current step CSS
  steps[currentStep - 1].className = "step:active";

  highlightButtons();
};

let right = () => {
  // limit by checking if it's even possible to go right by history

  let chosenButton = total[currentStep];

  if (chosenButton == null) {
    return;
  }

  if (total[currentStep + 1] == null) {
    unhighlightButtons();
  }

  steps[currentStep - 1].className = "step";

  // lower the currentStep
  currentStep = currentStep + 1;

  // activate the current step CSS
  steps[currentStep - 1].className = "step:active";

  // highlight future buttons

  highlightButtons();
};
