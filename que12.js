const readlineSync=require("readline-sync");
let n=readlineSync.questionInt("enter the n");


let sum=0;
let i=1;
while(i<=n){
    if(i%2==0){
    sum+=i;
    i++;
    }else{
        i++;
    }
}
console.log(sum);