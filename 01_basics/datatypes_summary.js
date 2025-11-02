//there are two types of data based on how these are stored in memory
// #primitive
// 7 types- string, number,null,undefined,symbol,BigInt
 const score=100
 const score1=100.3
 const isLoggedIn=false
 let userEmail;

 const id=Symbol('123')
 const anotherId=Symbol('123')
 console.log(id===anotherId)

 const bigNumber=12138451132135n // bigInt

//# non-primitive or reference type
// Arrays, Objects, Functions

const heroes=["shaktiman" , "Nagraaj" , "Doga"]

let myObj={
          Name: "Sumit",
          age: 22
}

const myFunction= function(){
          console.log("hello world")
}

console.log(typeof null)// object
console.log(typeof myObj)//object
// object give datatype as object if it is native or host and does not implement and if it implements(calls) it gives function
console.log(typeof myFunction)// function or more specific function object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory
// stack(for primitive datatypes and gives copy of data) and heap(for non-primitive datatypes and gives refernce of data)

// let myYoutube="HiteshDotCom"
// let anotherName=myYoutube//myyoutube ki copy di hai tbhi myYoutube me kchh change nhi hua
// console.log(anotherName)

// AnotherName="ChaiAurCode"
// console.log(AnotherName)
// console.log(myYoutube)

let userOne = {//stored in heap memory hence reference is passed in userTwo
          Email:"sumit.email.com",
          upi:"user1@ybl"
}
let userTwo=userOne

userTwo.Email="sumit123.com"
console.log(userOne.Email)
console.log(userTwo.Email)

