const marvel_Heroes=["Spiderman","Ironman","Hulk"]
const dc_Heroes=["Superman","Batman","Flash"]

// marvel_Heroes.push(dc_Heroes)
// console.log(marvel_Heroes)
// console.log(marvel_Heroes[3][1])
const newHeros=marvel_Heroes.concat(dc_Heroes)
console.log(newHeros)

const allNewHeros=[...marvel_Heroes,...dc_Heroes]//preferred /we can add more arrays also in similar fashion ...--> spread operator
console.log(allNewHeros)

const another_Array=[1,2,3,[5,6,8],10,[2,3,[2,6,7]]]
const real_Another_Array=another_Array.flat(Infinity)
console.log(real_Another_Array)

console.log(Array.isArray("hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}));//Interesting case--> returns empty string

score1=100
score2=200
score3=300
console.log(Array.of(score1,score2,score3))
