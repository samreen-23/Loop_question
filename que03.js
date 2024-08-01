const readlinesync=require("readline-sync");

let n = readlinesync.questionInt("enter the value of n");
for(let i=1; i <= n; i++){
    if(i%2==0){
        console.log(i); 
    }
}
