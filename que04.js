const readlinesync=require("readline-sync");


let n = readlinesync.questionInt("enter the value of n");
let sum = 0;
for(i=1; i <= n; i++){
    sum += i ;
}
console.log(sum);
