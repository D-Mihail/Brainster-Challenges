const letters = document.querySelectorAll("button");
const paragraph = document.querySelector("p");
let text = [];
let checkbox = false;

letters.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.innerText === "backspace") {
	// Go vadime posledniot element, I povtorno go gradime celiot paragraph
      text.pop();
      paragraph.innerHTML = "";
      text.forEach(element => {
        if (element === "enter") {
	  paragraph.appendChild(document.createElement("br"));
        } else {
          paragraph.innerHTML += element;
        }
      });
    } else if (e.innerText === "SPACE") {
	text.push(" ");
	paragraph.innerHTML += " ";
    } else if (e.innerText === "Enter") {
	// Ovoj tekst e proizvolen, go koristime edinstveno za backspace situacijata
	text.push("enter");
	paragraph.appendChild(document.createElement("br"));
    } else if (e.innerText === "Caps Lock") {
    	// Tuka pravime negacija i proverka istovremeno
      if (checkbox = !checkbox) {
        e.classList.add("checkbox-green");
      } else {
        e.classList.remove("checkbox-green");
      }
    } else {
      	checkbox ? text.push(e.innerText) : text.push(e.innerText.toLowerCase());
	paragraph.innerHTML += text[text.length - 1];
      }
  });
});