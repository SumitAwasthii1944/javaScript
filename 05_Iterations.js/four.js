//forin on obj
const myObj={
          js:'javascript',
          cpp:'c++',
          rb:'ruby',
          swift:'swift by apple'
}

for (const key in myObj) {// forin loop
          console.log(key)
}

for (const key in myObj) {
          console.log(myObj[key])
}

for (const key in myObj) {
          console.log(`${key} is filename for ${myObj[key]}`)
}

// forin on array
const arr=[10,20,30,40]
for (const key in arr) {
      console.log(key);     
}
for (const key in arr) {
      console.log(arr[key]);     
}
// database me values aise hi aati hain
const myCoding=[
      {
            language:"javascript",
            languageFileName:"js"
      },
      {
            language:"java",
            languageFileName:"java"
      },
      {
            language:"python",
            languageFileName:"py"
      },
]

myCoding.forEach((item)=>{
      console.log(item.language);
      console.log(item.languageFileName)
})