const letters = document.querySelectorAll("button");
const paragraph = document.querySelector("p");
// Na klik, ako e true da prodolzhi so golemi bukvi, ako e false so mali
let checkbox = false;
letters.forEach((e) => {
  e.addEventListener("click", () => {
    let written = Array.from(paragraph.innerText);
    if (e.innerText === "backspace") {
      // Sakam da go pretvoram tekstot vo niza, da go izbrisham posledniot chlen, da go sklopam vo eden element i da go vratam kako vrednost vo paragrafot
      written.pop();
      let joinedSentence = written.join("");
      while (written.length) {
        written.pop();
      }
      paragraph.innerHTML = joinedSentence;
    } else if (e.innerText === "SPACE") {
      let space = " ";
      paragraph.innerHTML += space;
    } else if (e.innerText === "Enter") {
      const row = document.createElement("br");
      paragraph.appendChild(row);
      written.push(row);
    } else if (e.innerText === "Caps Lock") {
      if ((checkbox = !checkbox)) {
        checkbox = true;
        e.classList.add("checkbox-green");
      } else {
        checkbox = false;
        e.classList.remove("checkbox-green");
      }
    } else {
      checkbox
        ? (paragraph.innerHTML += e.innerText)
        : (paragraph.innerHTML += e.innerText.toLowerCase());
    }
  });
});