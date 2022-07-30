const letters = document.querySelectorAll("button");
const paragraph = document.querySelector("p");
console.log(letters);

// Na klik, ako e true da prodolzhi so golemi bukvi, ako e false so mali

const checkbox = document.querySelector("#caps").checked = false;
console.log(checkbox);
const icon = document.querySelector("i");

letters.forEach((e) => {
  e.addEventListener("click", () => {
    let written = Array.from(paragraph.innerText);
    if (e.innerHTML === "backspace") {
      // SAKAM DA GO PRETVORAM TEKSTOT VO NIZA, DA GO IZBRISHAM POSLEDNIOT, DA GO SKLOPAM VO EDEN ELEMENT I DA GO VRATAM VO PARAGRAFOT
      console.log(written);
      written.pop();
      console.log(written);
      let joinedSentence = written.join("");
      while (written.length) {
        written.pop();
      }
      console.log(joinedSentence);

      paragraph.innerHTML = joinedSentence;
    } else if (e.innerText === "SPACE") {
      let space = " ";
      paragraph.innerHTML += space;
    } else if (e.innerText === "Enter") {
      const row = document.createElement("br");
      paragraph.appendChild(row);
      written.push(row);
    } else if (e === "Caps Lock") {
      checkbox === false ? (checkbox = true) : (checkbox = false);
      console.log(checkbox);
    } else {
      // TRY ONE
      checkbox
        ? (paragraph.innerHTML += e.innerHTML.toLowerCase)
        : (paragraph.innerHTML += e.innerHTML);

      // TRY TWO

      //     if (checkbox = false) {
      //         icon.classList.add("checkbox-round")
      //   paragraph.innerHTML += e.innerHTML;

      //     }
      //      else {
      //   paragraph.innerHTML += e.innerHTML.toUpperCase;
      //   console.log(e.innerHTML);
      // }
    }
  });
});
