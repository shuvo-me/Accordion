let accordions = document.querySelectorAll(".container");

console.log(typeof accordions);
for (i = 0; i < accordions.length; i++) {
  let elm = accordions[i];
  elm.addEventListener("click", function () {
    console.log(this);
    let elm = this;
    // if (elm.classList.contains("active")) {
    //   console.log(elm.classList.contains("active"), elm.classList.remove);
    //   elm.classList;
    // } else {
    //   elm.classList.add("active");
    // }

    accordions.forEach((acc) => {
      if (acc.classList.contains("active")) {
        hideOthers(acc);
      } else {
        // if (elm.classList.contains("active")) {
        //   elm.classList.remove("active");
        // } else {
        //   elm.classList.add("active");
        // }
        // elm.classList.toggle("active");
      }
    });
    if (elm.classList.contains("active")) {
      elm.classList.remove("active");
    } else {
      elm.classList.add("active");
    }
  });
}

function hideOthers(el) {
  el.classList.remove("active");
}
