function handleClick(event) {
  const myInput = document.getElementById("text").value;
  let site = "";
  if (!(myInput.includes(`http`) || myInput.includes(`https`))) {
    site = "https://" + myInput;
  }
  location.href = site;
}

document.getElementById("first-btn").addEventListener("click", handleClick);
document.getElementById("second-btn").addEventListener("click", handleClick);
