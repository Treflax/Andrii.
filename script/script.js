const percentageNumber = document.querySelectorAll('.language-card__number');
for (const item of percentageNumber) {
  let counter = 0;
setInterval(() => {
    const percentageNumberValue = Number(item.getAttribute('data-value'));
    if (counter !== percentageNumberValue) {
        counter++;
        item.innerHTML = `${counter}%`;
    }
}, 70);
}
// 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 40,
  loop: true,
  loopFillGroupWithBlank: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
