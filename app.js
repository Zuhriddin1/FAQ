const spanEl = document.querySelector(".text1");
const imgEl = document.querySelector(".text2");
const spAnEl = document.querySelector(".text3");
const ImgEL = document.querySelector(".text4");
const SpanEl = document.querySelector(".text5");
const IMGEl = document.querySelector(".text6");
const El = document.querySelector(".containeR");

let sozlar = {
  1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod corporis, necessitatibus aspernatur placeat voluptatibus?",
};

El.forEach((spanEl) => {
  El.addEventListener("click", () => {});
  sozlar.textContent = sozlar[El.innerText];
});
