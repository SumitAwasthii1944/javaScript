for( i=1;i<=10;i++){
          console.log(`outer loop value:${i}`);
          
          for(j=1;j<=10;j++){
                    console.log(i +'*'+j +"="+i*j);
                    
          }
}

let myArr=["flash","batman"]
for (let index = 0; index < myArr.length; index++) {
          const element = myArr[index];
          console.log(element);
          
}

// we can use break and continue also
// similarly while loop

// do-while loop
let score=11
do{
          console.log(score)
          score++
}while(score<=10);