
function sayMyName(){
          console.log("h")
          console.log("i")
          console.log("t")
          console.log("e")
          console.log("s")
          console.log("h")
}
//sayMyName --> reference
//sayMyName() //execution

function addTwoNumbers(number1,number2){
          console.log(number1+number2);
          
}
addTwoNumbers(3,4)
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

//const result=addTwoNumbers(3,5) // console.log(result)--> undefined because it is not returning anything

function addTwoNumbers2(number1,number2){
          let result2=number1+number2
          return result2
}
const result2=addTwoNumbers(3,5)
console.log(result2);

function loginUserMsg(userName){
          return `${userName} just logged in`
}
console.log(loginUserMsg("Hitesh"))
console.log(loginUserMsg())//--> undefined just logged in

function loginUserMsg2(userName){//undefined is conventionally taken as false
          if(!userName){
                 console.log("please enter correct UserName")
                 return   
          }
          return `${userName} just logged in`
}
console.log(loginUserMsg2())

function calculatePrice(num1){
       return num1 
}
console.log(calculatePrice(200,300,400));//200

function calculatePrice1(...num1){//-->here ... is rest operator 
       return num1 
}
console.log(calculatePrice1(200,300,400));//[200,300,400]

function calculatePrice1(val1,val2,...num1){//-->here ... is rest operator 
       return num1 
}
console.log(calculatePrice1(200,300,400,2000));//--> [400,2000]

const user={
       username:"hitesh",
       price:399
}

function calculatePrice(anyObject){
       console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
calculatePrice(user);
calculatePrice({
       username:"sam",
       price:399
})
