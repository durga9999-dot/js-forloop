// Import stylesheets
import './style.css';

// Write Javascript code!
const numbers = [23, 45, 56, 87, 98, 22, 12, 98, 10];

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

// const numbers = [29, 45, 56, 87, 98, 22, 12, 98, 10];
for (const idx in numbers) {
  console.log(numbers[idx]);
}

// const numbers = [23, 45, 56, 87, 98, 22, 12, 98, 10];

let idx = 0;
for (const num of numbers) {
  console.log(idx, num);
  ++idx;
}

// const numbers = [23, 45, 56, 87, 98, 22, 12, 98, 10, 24, 23, 14, 31];
numbers.forEach((num, idx) => {
  console.log(idx, numbers);
});
