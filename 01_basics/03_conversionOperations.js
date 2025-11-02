let score= "33"

console.log(typeof score)
console.log(typeof(score))

let ValueInNumber=Number(score)
console.log(typeof ValueInNumber)

let score2= "33abc"

console.log(typeof score2)

let ValueInNumber2=Number(score2)
console.log(typeof ValueInNumber2)
console.log(ValueInNumber2)

let score3= null

console.log(typeof score3)

let ValueInNumber3=Number(score3)
console.log(typeof ValueInNumber3)
console.log(ValueInNumber3)

let score4= undefined

console.log(typeof score4)

let ValueInNumber4=Number(score4)
console.log(typeof ValueInNumber4)
console.log(ValueInNumber4)


let score5= true

console.log(typeof score5)

let ValueInNumber5=Number(score5)
console.log(typeof ValueInNumber5)
console.log(ValueInNumber5)


let score6= "Sumit"

console.log(typeof score6)

let ValueInNumber6=Number(score6)
console.log(typeof ValueInNumber6)
console.log(ValueInNumber6)

//"33"--> 33 
//"33abc"--> NaN
//true-->1; false-->0
//""-->false "Sumit"-->true

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

// Operators

console.log("1" + 2)//12
console.log(1 + "2") //12
console.log("1"+ 2 +2) //122
console.log(1 + 2 + "2") //32
