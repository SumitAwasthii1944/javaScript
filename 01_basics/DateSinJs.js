let myDate = new Date()
console.log(myDate)//2025-10-08T05:17:17.633Z
console.log(myDate.toString())//Wed Oct 08 2025 10:47:17 GMT+0530 (India Standard Time)
console.log(myDate.toISOString())//2025-10-08T05:17:17.633Z
console.log(myDate.toDateString())//Wed Oct 08 2025
console.log(myDate.toJSON())//2025-10-08T05:17:17.633Z
console.log(myDate.toLocaleString())//8/10/2025, 10:47:17 am
console.log(typeof myDate)


// let myCreatedDate=new Date(2025,9,8,11,2)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate=new Date("2025-10-08")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

 let myCreatedDate=new Date("10-08-2025")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)// in milisecond
console.log(myCreatedDate.getTime())//date's time
console.log(Math.floor(Date.now()/1000))// in second

let newDate=new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)
console.log(`Today is ${newDate.toDateString()} and time is ${newDate.toLocaleTimeString()}`);

const weekDayName=newDate.toLocaleString('default',{
          weekday: 'long',

        })
console.log(weekDayName)


