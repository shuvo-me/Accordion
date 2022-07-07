let accordions = document.querySelectorAll(".container");

console.log(typeof accordions);
for (i = 0; i < accordions.length; i++) {
  let elm = accordions[i];
  elm.addEventListener("click", function () {
    elm.classList.toggle("active");
  });
}

// function hideOthers(el) {
//   el.classList.remove("active");
// }
