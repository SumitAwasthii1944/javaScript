//falsy values
//false, 0,-0,BigInt 0n, "",null,undefined,NaN

//truthy values
//non empty strings-->"0","false"," ",[],{},function(){}

userEmail=[]
// if(userEmail){
//           console.log("got an email")
// }else{
//           console.log("didn't got an email")
// }
//lekin hm aise nhi check krte hain empty array

if(userEmail.length===0){
          console.log("got an empty array");
          
}else{
          console.log("non empty array");
          
}

// for objects
const abc={}
if(Object.keys(abc).length===0){
          console.log("object is empty");
          
}
/*
false==0 --> true
false=='' --> true
0=='' --> true
 */

// null coalescing operator
val1=10 ?? 15
console.log(val1)
val2=null ?? 16
console.log(val2)
val3=undefined ?? 18
console.log(val3)
val4= undefined ?? 10 ?? 20
console.log(val4)
val5= null ?? undefined
console.log(val5)
val6= undefined ?? null
console.log(val6)

// ternary operator
// conditon ? true statement : false statement
