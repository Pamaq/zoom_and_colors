const plusBtn = document.querySelector(".sizeUp");
const minusBtn = document.querySelector(".sizeDown");
const colorBtn = document.querySelector(".color");
const textPar = document.querySelector("p");
//przycisk plus ma powiekszac tekst
//przycisk minus ma pomniejszac tekst
//przycisk color ma zmieniac kolor tekstu
const plus = () => {
	textPar.classList.toggle("bigger");
};

const minus = () => {
	textPar.classList.toggle("smaller");
};

let colors = [red, blue, pink, purple, green, yellow];
// const color = () => {
// 	let chosenColor;
// 	plus.style.color = chosenColor;
// };

plusBtn.addEventListener("click", plus);
minusBtn.addEventListener("click", minus);
colorBtn.addEventListener("click", color);
