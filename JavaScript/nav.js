function assignPlusIconsToAll() {
  let minuses = document.getElementsByClassName("minus_icon");
  if (minuses) {
    for (let minus of minuses) {
      minus.src = minus.src.replace("minus_", "plus_");
      minus.parentNode.parentNode.style.backgroundColor = "#fff";
      minus.className = "plus_icon";
    }
  }
}

function openSidebar(event) {
  event.preventDefault();
  let sidebar = document.getElementById("sidebar-mobile");
  sidebar.style.animationDuration = "0.3s";
  sidebar.style.animationName = "slidein";
  sidebar.style.left = "0px";

  let coverSection = document.getElementById("cover-section");
  coverSection.style.display = "block";
}

// #d7d7d7 - onclick parent minus color

function closeSidebar(event) {
  let sidebar = document.getElementById("sidebar-mobile");
  sidebar.style.animationDuration = "0.3s";
  sidebar.style.animationName = "slideout";
  sidebar.style.left = "-300px";

  let coverSection = document.getElementById("cover-section");
  coverSection.style.display = "none";
}

function showPlusMinus(event) {
  if (event.target.src.includes("plus_")) {
    assignPlusIconsToAll();
    event.target.src = event.target.src.replace("plus_", "minus_");
    event.target.parentNode.parentNode.style.backgroundColor = "#d7d7d7";
    event.target.className = event.target.className.replace("plus_", "minus_");
  } else if (event.target.src.includes("minus_")) {
    event.target.src = event.target.src.replace("minus_", "plus_");
    event.target.parentNode.parentNode.style.backgroundColor = "#fff";
    event.target.className = event.target.className.replace("minus_", "plus_");
  }
}
