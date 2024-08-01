const readlinesync=require("readline-sync");



let n= readlinesync.questionInt("enter the value of n");
let k=0;
while(n>0){
    digit=n%10;
    k=k*10+digit;
    n=parseInt(n/10);
}
console.log(k);
