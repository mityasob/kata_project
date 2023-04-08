let summary = document.querySelector(".summary");
let hideBrands = function(element) {
  for (let i = 0; i < element.length; i++) {
    element[i].setAttribute("style", "display: none");
  }
}
summary.addEventListener("click", function() {
  let summaryClass = summary.classList;
  let expandText = summary.querySelector(".summary-text__expand-text");
  let hideText = summary.querySelector(".summary-text__hide-text");
  let expandArrow = summary.querySelectorAll(".expand-icon__expand-arrow");
  let tabletHidden = document.querySelectorAll(".tablet-hidden");
  let desktopHidden = document.querySelectorAll(".desktop-hidden");
  if (summaryClass.contains("hidden")) {
    expandText.setAttribute("style", "display: none");
    hideText.setAttribute("style", "display: inline");
    for (let i = 0; i < expandArrow.length; i++) {
      expandArrow[i].classList.remove("expand-icon__expand-arrow--to-bottom");
      expandArrow[i].classList.add("expand-icon__expand-arrow--to-top");
    }
    for (let i = 0; i < tabletHidden.length; i++) {
      tabletHidden[i].setAttribute("style", "display: flex");
    }
    for (let i = 0; i < desktopHidden.length; i++) {
      desktopHidden[i].setAttribute("style", "display: flex");
    }
    summary.classList.remove("hidden");
    summary.classList.add("expanded");
  } else {
    expandText.setAttribute("style", "display: inline");
    hideText.setAttribute("style", "display: none");
    for (let i = 0; i < expandArrow.length; i++) {
      expandArrow[i].classList.remove("expand-icon__expand-arrow--to-top");
      expandArrow[i].classList.add("expand-icon__expand-arrow--to-bottom")
    }
    if (window.innerWidth < 1120) {
      hideBrands(tabletHidden);
    } else {
      hideBrands(desktopHidden);
    }
    summary.classList.remove("expanded")
    summary.classList.add("hidden")
  }
});