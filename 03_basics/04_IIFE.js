(function chai(){
          //named IIFE
          console.log("DB CONNECTED")
})(); // semi colon is necessary in IIFE
// do IIFE hain to semi colon lgana hi pdega

( (name)=>{
          console.log(`DB CONNECTED TWO ${name}`)
})("hitesh")

// global variables function ko impactn kre isliye hm IIFE ko use krte hain
//global pollutants n pollute kre function ko isliye