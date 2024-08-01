const readlinesync=require("readline-sync");

let n=readlinesync.questionInt("enter the vaue of n");
let count = 0;
for(let i = 1 ; i<=n ; i++){
    if(n%i == 0){
        count+= 1;
    }
}
if(count == 2){
    console.log("prime number ");
}else{
    console.log("Not a prime number ");
}


 
