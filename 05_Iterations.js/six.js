// const coding=["js","ruby","java","python","cpp"]
// const values=coding.forEach( (item) => {
//           console.log(item)
//           return item;//forEach does not return any item
// })

// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9]
// using simple forEach
const newNums=[]
myNums.forEach( (num) => {
          if(num>4){
                    newNums.push(num)
          }
})
//const newNums=myNums.filter( (num) => num>4 )// .filter returns values agr {} ye nhi use krenge to direct return ho jaega

// const newNums=myNums.filter( (num) => {// scope open kiya toh return use krna pdega bina uske nhi return hoga
//           return num>4 
// })
console.log(newNums);

const books=[
          {title:"book one",genre:"fiction",publish:1981,edition:2004},
          {title:"book two",genre:"non fiction",publish:1986,edition:2006},
          {title:"book three",genre:"fiction",publish:1991,edition:2008},
          {title:"book four",genre:"history",publish:1989,edition:2010}
]

//ab user books pe kch filter lgaa rha h
let userBooks=books.filter( (bk) => bk.genre==="history")
console.log(userBooks);
userBooks=books.filter((bk)=>{return bk.publish<1990 && bk.genre==="history"})
console.log(userBooks);




