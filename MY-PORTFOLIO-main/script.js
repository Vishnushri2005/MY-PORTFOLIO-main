const carousel = document.getElementById("carousel");
const items = carousel.querySelectorAll(".project-item");
let index = 0;

function updateCarousel() {
  const total = items.length;
  const middle = Math.floor(total / 2);

  items.forEach((item, i) => {
    const offset = ((i - index + total) % total + total) % total;
    const position = offset > total / 2 ? offset - total : offset;

    const translateX = position * 140;
    const scale = position === 0 ? 1.2 : 1;
    const zIndex = 100 - Math.abs(position);
    const opacity = Math.abs(position) > 3 ? 0 : 1;

    item.style.transform = `translateX(${translateX}px) scale(${scale})`;
    item.style.zIndex = zIndex;
    item.style.opacity = opacity;
  });
}

document.querySelector(".nav.left").addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

document.querySelector(".nav.right").addEventListener("click", () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

updateCarousel();