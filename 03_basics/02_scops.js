function one(){
          const username="hitesh"
          function two(){
                    const website="youtube"
                    console.log(username)
          }
          //console.log(website)//  error--> not accessible
          two()
}
one()

//+++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++++++++
//two ways of writing
//addone(5)--> bilkul sahi chlega
function addone(num){
          return num+1
}
addone(5)// isko declarartion ke phle bhi likh skte hain

//addtwo(5)--> error aaega
const addtwo=function(num){
          return num+2
}
addtwo(5)// isko declaration ke phle likhenge to error aaega

