const plusBtn = document.querySelector(".sizeUp");
const minusBtn = document.querySelector(".sizeDown");
const colorBtn = document.querySelector(".color");
const textPar = document.querySelector("p");
let fontSize = 36;
//przycisk plus ma powiekszac tekst
//przycisk minus ma pomniejszac tekst
//przycisk color ma zmieniac kolor tekstu
const plus = () => {
	if (fontSize > 81) return;
	fontSize += 5;
	textPar.style.fontSize = fontSize + "px";
};

const minus = () => {
	if (fontSize < 21) return;
	fontSize -= 5;
	textPar.style.fontSize = fontSize + "px";
};

// let colors = ["red", "blue", "pink", "purple", "green", "yellow"];

const color = () => {
	// let number = Math.floor(Math.random() * colors.length);
	// textPar.style.color = colors[number]; sposob I czyli moj
	const r = Math.floor(Math.random() * 255);
	console.log(r);
	const g = Math.floor(Math.random() * 255);
	console.log(g);
	const b = Math.floor(Math.random() * 255);
	console.log(b);
	textPar.style.color = rgb("r", "g", "b");
};

plusBtn.addEventListener("click", plus);
minusBtn.addEventListener("click", minus);
colorBtn.addEventListener("click", color);
