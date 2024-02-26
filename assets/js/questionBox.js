function questionBoxHandler() {
  
  document.querySelectorAll(".question-box").forEach((box) => {
    box.style.height =
      box.querySelector(".question-title").scrollHeight + 10 + "px";
    box.removeEventListener("click", boxHandler);
    box.addEventListener("click", boxHandler);
  });
}
questionBoxHandler();

function boxHandler() {
  if (
    document.querySelector(".question-box--active") &&
    !this.classList.contains("question-box--active")
  ) {
    console.log(
      document.querySelector(".question-box--active .question-title")
        .scrollHeight
    );
    document.querySelector(".question-box--active").style.height =
      document.querySelector(".question-box--active .question-title")
        .scrollHeight +
      13 +
      "px";
    document
      .querySelector(".question-box--active")
      .classList.remove("question-box--active");
  }

  this.classList.toggle("question-box--active");
  setBoxHeight(this);
}

window.addEventListener("resize", questionBoxHandler);

function setBoxHeight(el) {
  const height = el.scrollHeight.toString() + "px";
  if (el.classList.contains("question-box--active")) el.style.height = height ;
  else
    el.style.height =
      el.querySelector(".question-title").scrollHeight + 10 + "px";
}
