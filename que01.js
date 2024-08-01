const readlinesync=require("readline-sync");

let sum = 0;
let n = readlinesync.questionInt("enter the value of n");
for(let i=1 ; i<n ; i++){
    sum += i;
}
console.log("sum of first" + n + "natural Number is" + sum);
