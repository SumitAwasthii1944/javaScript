// const tinder=new object()--> singleton object

const tinderUser={}  // not singleton object
console.log(tinderUser)
tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false
console.log(tinderUser)

const regular_user={
          email:"some@gmail.com",
          fullname: {
                    userfullname: {
                              firstName:"Hitesh",
                              lastName:"Choud"
                    }
          }
}
console.log(regular_user.fullname?.userfullname.firstName);// --> ? means agr fullname h to aage bdho

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}

// const obj3={obj1,obj2}
// console.log(obj3);

// const obj3=Object.assign({},obj1,obj2,obj4)// {}--> target object ; obj1 and obj2 are sources which merges in target ( {} )
// console.log(obj3)

const obj3={...obj1,...obj2,...obj4}//mainly hm yhi use krte hain
console.log(obj3)

//if data is recieved from usersbase

const users=[
          {
                    id:1,
                    email:"h@gmail.com"
          },
          {
                    id:2,
                    email:"g@gmail.com"
          },
          {
                    id:3,
                    email:"i@gmail.com"
          }
]
console.log(users[1].email)// id:2 ka email milega

console.log(tinderUser)
console.log(Object.keys(tinderUser))//returns an array 
console.log(Object.values(tinderUser))//returns an array 
console.log(Object.entries(tinderUser))//returns an array inside array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
          coursename:"js in hindi",
          courseInstructor:"hitesh",
          price:"999"
}

// console.log(course.courseInstructor)

const {courseInstructor:Instructor}=course//it is called object de-structuring baar baar poora nhi likhenge
console.log(Instructor)

//in react
/*const navbar=({company})=> {

}
navbar(company="hitesh")*/

// {           API //Json structure//             for more understanding --> api.github.com/users/hiteshchoudhary
//           "name" : "js in hindi"
//           "instructor" : "hitesh"
//           "price" : "free"
// }

// API in the form of arrays

// [
//           {},
//           {},
//           {}
// ]

// use "randomuser me api" for understanding and format it using "Json formatter"


