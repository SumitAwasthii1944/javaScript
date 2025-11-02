//only unique values 
//preserves order
//forof loop use krenge forin se nhi iterate kr skte map pe
const map=new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('IN', "India")
console.log(map)

for (const key of map) {
          console.log(key);        
}

for (const [key,value] of map) {//shortcut to print keys and values as you want
          console.log(key,':-',value);  
}

// objects ko aise iterate nhi kr skte forof se uske liye aur tareeke hain
// const myObj={
//           'game1': 'NFS',
//           'game2': 'Spiderman'
// }

// for (const [key,value] of myObj) {
//          console.log(key,':-',value);   
// }