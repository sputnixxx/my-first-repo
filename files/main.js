// Smooth scrolling
const links = document.querySelectorAll('a[href*="#"]');
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// change color on click on input[name="color"]
const colors = document.querySelectorAll('input[name="color"]');
const body = document.querySelector("body");

for (const color of colors) {
    color.addEventListener("click", changeColor);
}

function changeColor(e) {
    // e.preventDefault();
    const color = this.getAttribute("value");
    body.dataset.color = color;
}
