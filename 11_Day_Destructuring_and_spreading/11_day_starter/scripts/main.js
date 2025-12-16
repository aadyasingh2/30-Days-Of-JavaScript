console.log(countries)
alert('Open the console and check if the countries has been loaded')
 // Level 1

// 1. Destructure and assign the elements of the countries array to three variables: fin, est, swed

let a=[2.718,3.14,9.8,98.6,100]
let [e,pi,gravity,humanBodyTemp,waterBoilingTemp]=a
console.log(e)
console.log(pi)
console.log(gravity)
console.log(humanBodyTemp)
console.log(waterBoilingTemp)


// 2.

const countri = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin,est,sw,den,nor]=countri

// 3 
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
let {w,h,b,p}=rectangle
console.log(w,h,b,p)


// level 2

// 1 

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

for (const l of users){
  let {name,scores,skills,age}=l
  console.log(name)
  console.log(scores)
  console.log(skills)
  console.log(age)
}


// LEVEL 3

//1
for( const b of countries){
let {name:n,capital:c,languages:l, population:po }=b
console.log(n)
console.log(c)
console.log(l)
console.log(po)
}

// 2 
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [nae,skills,[, , jsScore,reactScore]]=student
 console.log(nae, skills, jsScore, reactScore)