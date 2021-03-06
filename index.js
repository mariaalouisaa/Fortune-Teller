function play() {
  const responseText = document.querySelector("#ball-text");

  let randomNumber = Math.floor(Math.random() * 8);

  randomNumber === 0
    ? (responseText.innerHTML = "It is most certain")
    : randomNumber === 1
    ? (responseText.innerHTML = "That may be true")
    : randomNumber === 2
    ? (responseText.innerHTML = "Reply hazy try again")
    : randomNumber === 3
    ? (responseText.innerHTML = "Cannot predict now")
    : randomNumber === 4
    ? (responseText.innerHTML = "Do not count on it")
    : randomNumber === 5
    ? (responseText.innerHTML = "My sources say no")
    : randomNumber === 6
    ? (responseText.innerHTML = "Outlook not so good")
    : (responseText.innerHTML = "Signs point to yes");
}

function question(event) {
  event.preventDefault();

  const questionInput = document.querySelector("#input-bar");

  const questionText = document.querySelector("#question-text");
  if (questionInput.value) {
    questionText.innerHTML = `${questionInput.value}`;
  }

  document.getElementById("input-bar").value = " ";
  play();
}

const form = document.querySelector("#search-bar");
form.addEventListener("submit", question);
