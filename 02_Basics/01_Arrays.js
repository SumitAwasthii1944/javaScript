const arr=[1,2,3,5,6,"Hitesh",true]// resizable,pass by reference
//console.log(arr)

const myArr=new Array(1,2,3,4)
//console.log(myArr[0])

//Array Methods
// arr.push(7)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(9)//adds in beginning
// console.log(arr)
// arr.shift()// remove from beginning
// console.log(arr)
// console.log(arr.includes(5))
// console.log(arr.indexOf(5))

// const newArr=arr.join()//converts to string
// console.log(arr)
// console.log(newArr)
// console.log(typeof newArr)
console.log("A ",myArr)

const myn1=arr.slice(1,3)
console.log(myn1)

console.log("B ",myArr)

const myn2=myArr.splice(1,3)//cuts a part of array apart disfigures the array
console.log("C ",myArr)
console.log(myn2)


