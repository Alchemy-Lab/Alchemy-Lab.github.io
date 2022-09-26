let count = 0;
let stepValue = 1;
let maxValue = 100;
let minValue = 1;
let maxLength = 3;

// HTML Elements
let counterBox = createHtmlElement("div", "counterBox", "");

let title = createHtmlElement("h1", "title", "JavaScript Counter");

let counter = createHtmlElement("div", "counter", count);

let buttonContainer = createHtmlElement("div", "buttonContainer", "");

let plusButton = createHtmlElement("div", "plusButton", "<span>+</span>");
plusButton.classList.add("button", "prevent-select");

let stepBox = createHtmlElement(
  "div",
  "stepBox",
  `<input type="number" id="step" name="step" min="${minValue}" max="${maxValue}" maxlength="${maxLength}" value="${stepValue}" />`
);
stepBox.classList.add("button", "prevent-select");

let minusButton = createHtmlElement("div", "minusButton", "<span>-</span>");
minusButton.classList.add("button", "prevent-select");

let stepText = createHtmlElement(
  "p",
  "stepText",
  "Step starts from 1 up to 100"
);

let reset = createHtmlElement("div", "reset", "<span>Reset</span>");
reset.classList.add("button", "prevent-select");

document.body.insertAdjacentElement("afterbegin", counterBox);

counterBox.appendChild(title);
counterBox.appendChild(counter);
counterBox.appendChild(buttonContainer);
buttonContainer.appendChild(minusButton);
buttonContainer.appendChild(stepBox);
buttonContainer.appendChild(plusButton);
counterBox.appendChild(stepText);
counterBox.appendChild(reset);

let step = document.getElementById("step");

// Event listeners
plusButton.addEventListener("click", () => updateCounter("+"));
minusButton.addEventListener("click", () => updateCounter("-"));
reset.addEventListener("click", resetCounter);

step.addEventListener("input", () => {
  if (step.value.length > step.maxLength) {
    step.value = step.value.slice(0, step.maxLength);
  }
  if (step.value > maxValue) step.value = maxValue;
  if (step.value < minValue) step.value = minValue;
});

// Core functions
function createHtmlElement(element, id, content) {
  let theEl = document.createElement(element);
  theEl.setAttribute("id", id);
  theEl.innerHTML = content;
  return theEl;
}

function updateCounter(op) {
  let value = parseInt(step.value);
  if (value == undefined || value == null || isNaN(value)) {
    step.value = 1;
    value = 1;
  }

  switch (op) {
    case "+":
      counter.innerHTML = count += value;
      break;
    case "-":
      counter.innerHTML = count -= value;
      break;
  }
}

function resetCounter() {
  count = 0;
  counter.innerHTML = count;
  step.value = 1;
}
