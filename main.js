const removed = [];
const numbers = [...Array(121).keys()];
numbers.splice(0, 2); // remove 0, 1

for (let i = 2; i < numbers.length; i++) {
  if (removed.includes(i)) continue;

  for (let j = 2; j < numbers.length; j++) {
    const prime = i * j;
    if (prime > 121) break;
    if (!removed.includes(prime)) {
      removed.push(prime);
      const index = numbers.indexOf(prime);
      if (index != -1) numbers.splice(index, 1);
    }
  }
}

console.log("Prime Numbers => ", numbers.join(", "));
