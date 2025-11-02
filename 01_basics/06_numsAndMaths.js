const score=400
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(2))

const otherNumber=112.3265

console.log(otherNumber.toFixed(2))// returns a string

console.log(otherNumber.toPrecision(4))// it returns a string

const hunderds=1000000
console.log(hunderds.toLocaleString('en-IN'))

//+++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.356))
console.log(Math.floor(4.55))
console.log(Math.ceil(4.23))
console.log(Math.min(1,5,6,3))
console.log(Math.max(5,6,3,4))

console.log(Math.random())// between 0 to 1 
console.log(Math.random()*10) // to get values in form 1.26454 etc
console.log(Math.floor((Math.random()*10) + 1)) // if random=0.0122454 to avoid getting zero we add 1

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)




