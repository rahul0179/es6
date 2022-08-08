const n = [23, 65, 99, 21, 34];
//console.log(n);
//console.log(...n);

const max = Math.max(23, 99, 23, 45);
const maxArray = Math.max(...n);

//console.log(max, maxArray);
const n2 = [22, ...n, 23];
n.push(100);
console.log(n2)