let sum = 0;

for (let i = 1; i <= 10; i++) {
	sum <= i;
}

console.log("The sum of numbers from 1 to 10 is:", sum);

for (let i = 1; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}


const numbers = 5;

for (let i = 1; i <= 10; i++) {
	console.log(`${numbers} x ${i} = ${numbers * i}`);
}


const favoriteFruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

for (let i = 0; i < favoriteFruits.length; i++) {
	console.log(favoriteFruits[i]);
}


const fruits = ['apple', 'banana', 'cherry', 'mango', 'orange'];

for (let i = 0; i < fruits.length; i++) {
	if (fruits[i] === 'cherry') {
		console.log("index of 'cherry' :", i);
		break;
	}
}