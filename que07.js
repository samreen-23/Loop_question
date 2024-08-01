const readlinesync=require("readline-sync");


let n= readlinesync.questionInt("enter the value of n");
for(count=0;n>0;count++){
    divide=n%10;
    n=parseInt(n/10);
    
}
console.log(count);


// let c=0;
// while(n>0)
//     {
//         divide=n%10;
//         n=parseInt(n/10);
//         c++;
//     }
//     console.log(c);

