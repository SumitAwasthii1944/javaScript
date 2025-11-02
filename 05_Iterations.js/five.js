const coding=["js","ruby","java","python","cpp"]
//funtion --> function name(){} --> callback function --> name nhi likhte function(){}
coding.forEach(function (val){
          console.log(val);
          
})

coding.forEach((val)=>{//arrow function se
          console.log(val);
          
})

function printMe(item){
          console.log(item)
}
coding.forEach(printMe)// sirf reference diya h execute nhi kiya

coding.forEach(function (val,index,arr){//teen variables de skte hain
          console.log(val,index,arr);
          
})