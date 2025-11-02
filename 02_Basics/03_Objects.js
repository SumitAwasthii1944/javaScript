//Singleton -->constructor se singleton bnta h
//Object.create-->constructor

//jb hm objects ko literals ki trh declare krte hain tb singlton nhi bnta
//object literals
// Objects do not not preserve order in which they are entered
const mysym=Symbol("key1")

const JsUser={
          name:"Hitesh",
          "full name":"Hitesh chod",
          [mysym]: "mykey1",// [] used to represent symbol
          age:18,
          location:"SLN",
          email:"hitesh@google.com",
          isLoggedIn:false,
          lastLoginDays:["Monday","Tuesday"]
}
console.log(JsUser.email)//generally we use .
console.log(JsUser["email"])//but in some special case we use []
console.log(JsUser["full name"])
console.log(JsUser[mysym])//and we always use [] for symbol

JsUser.email="hitesh@chatgpt.com"
//Object.freeze(JsUser)  --> further changes will not be made
//JsUser.email="bhdghzfsbhjvffh"

console.log(JsUser)
JsUser.greeting=function(){
          console.log("Hello JsUser");
          
}
JsUser.greetingTwo=function(){
          console.log(`Hello JsUser,${this.name}`)
}
console.log(JsUser.greeting)//[function(Anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




