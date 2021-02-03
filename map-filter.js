const numbers = [2, 3, 4, 5, 6];
const result = numbers.map(x => x * x);
console.log(result);

const smaller=numbers.filter(x=> x<4);
console.log(smaller);

const bigger=numbers.filter(x=> x>4);
console.log(bigger);

const num= numbers.find(x=>x>4);
console.log(num);
// map ar filter array dey r find 1st element ta show kore