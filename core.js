const letters = document.querySelectorAll("button");
const paragraph = document.querySelector("p");
console.log(letters);

// Na klik, ako e true da prodolzhi so golemi bukvi, ako e false so mali

let checkbox = false;
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
    } else if (e.innerText === "Caps Lock") {
      if ((checkbox = !checkbox)) {
        checkbox = true;
        e.classList.add('checkbox-green');
      } else {
        checkbox = false;
        e.classList.remove('checkbox-green');

      }
      console.log(checkbox);
    } else {
      // TRY ONE
      checkbox
        ? (paragraph.innerHTML += e.innerHTML)
        : (paragraph.innerHTML += e.innerHTML.toLowerCase());

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
