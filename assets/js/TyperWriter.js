const TypeWriter = function (wait = 2000, words, txtElement) {
  this.wait = parseInt(wait, 10);
  this.words = words;
  this.txtElement = txtElement;
  this.txt = "";
  this.wordIndex = 0;
  this.type();
  this.isDeleting = false;
};

TypeWriter.prototype.type = function () {
  this.current = this.wordIndex % this.words.length;
  this.fullTxt = this.words[this.current];

  let typeSpeed = 120;

  if (this.isDeleting) {
    this.typeSpeed /= 3;
  }

  if (this.isDeleting) {
    this.txt = this.fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = this.fullTxt.substring(0, this.txt.length + 1);
  }

  if (!this.isDeleting && this.txt === this.fullTxt) {
    this.isDeleting = true;
    typeSpeed = this.wait;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.wordIndex++;
  }

  this.txtElement.innerHTML = this.txt;

  setTimeout(() => {
    this.type();
  }, typeSpeed);
};

//init
document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector("#changing");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = JSON.parse(txtElement.getAttribute("data-wait"));
  new TypeWriter(wait, words, txtElement);
}
