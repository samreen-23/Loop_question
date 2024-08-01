const readlinesync=require("readline-sync");


let n=readlinesync.questionInt("enter the value of n");
let sum=0;
while(n>0){
    divide=n%10;
    sum+=divide;
    n=parseInt(n/10);
}
console.log(sum);