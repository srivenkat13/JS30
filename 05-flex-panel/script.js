const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleOff() {
  this.classList.remove("open");
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle("open-active");
  }
}
panels.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("mouseout", toggleOff);
  panel.addEventListener("transitionend", toggleActive);
});
