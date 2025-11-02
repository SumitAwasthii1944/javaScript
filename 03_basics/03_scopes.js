const user={
          username:"hitesh",
          price:399,
          welcomeMessage: function(){
                    console.log(`${this.username}, welcome to website`)
                    console.log(this)
          }
}
// this refers to current context
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this)//--> {} in node and shows window in chrome

// function chai(){
//           let username="hitesh"
//           console.log(this)
// }
// chai()

function chai1(){
          let username="hitesh"
          console.log(this.username)//--> undefined ,this is undefined in function, only used in object
}
chai1()

const chai= () =>{// arrow funtion
          let username="hitesh"
          console.log(this)
}
chai()

// 
// const addTwo = (num1,num2)=>{
//           return num1+num2
// }
//const addTwo = (num1,num2)=> (num1+num2) // implicit return me return nhi likhna pdta h

const addTwo = (num1,num2)=> ({username:"hitesh"})
console.log(addTwo(3,4));
//normal function me this use hota h arrow me nhi, wo global name dhundta h

