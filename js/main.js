const Myinput = document.getElementById("text");

function handleClick(event) {
  let linkArr = Myinput.value.split("");
  let arrText = [];
  for (let i = 0; i < 5; i++) {
    arrText.push(linkArr[i]);
  }
  for (let i = 0; i < arrText.length; i++) {
    if (arrText[i] === [`http`] || arrText[i] === [`https`]) {
      continue;
    } else {
      linkArr.unshift(`https://`);
      break;
    }
  }
  let stringLink = linkArr.join("");

  location.href = stringLink;
}

document.getElementById("first-btn").addEventListener("click", handleClick);
document.getElementById("second-btn").addEventListener("click", handleClick);
