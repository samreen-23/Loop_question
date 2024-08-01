const readlinesync=require("readline-sync");
  

let n=readlinesync.questionInt("enter the value n");
let sum=0;
for(i=1;  i <= n; i++){
    if(n%i==0);
    sum+=1;
}
if(sum==n){
    console.log("yes");
}
else{
    console.log("no");
}
