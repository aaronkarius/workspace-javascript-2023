function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var has = randomInt(300, 600);
console.log(has);
var gives = randomInt(100, has);
console.log(gives);
var takes = randomInt(1, 10);
console.log(takes);
document.getElementById("has-stickers").innerHTML = has;
document.getElementById("gives-stickers").innerHTML = gives;
document.getElementById("takes-stickers").innerHTML = takes;

document.querySelector("[value='1']").nextSibling.nodeValue = `${has}-${
  gives - takes
}`;
document.querySelector("[value='2']").nextSibling.nodeValue = `${has}-${
  gives + takes
}`;
document.querySelector(
  "[value='3']"
).nextSibling.nodeValue = `${has}-${gives}-${takes}`;
document.querySelector(
  "[value='4']"
).nextSibling.nodeValue = `${has}-${gives}+${takes}`;

function handleClick(e) {
  e.preventDefault();
  this.setAttribute(
    "class",
    this.getAttribute("class") === "answer" ? "answer selected" : "answer"
  );

  //   this.animate(
  //     [{ transform: "rotate(0deg)" }, { tranform: "rotate(180deg)" }],
  //     {
  //       duration: 3000,
  //       fill: "forwards",
  //     }
  //   );
}

document
  .querySelectorAll("div [class='answer']")
  .forEach(($el) => $el.addEventListener("click", handleClick, false));
