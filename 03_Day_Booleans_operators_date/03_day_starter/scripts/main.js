// this is your main.js script
//Level 1 Exercises
// Declare variables and assign string, boolean, undefined and null data types

let firstName="Aadya"
let lastName="Singh"
let country="India"
let city="New Delhi"
let age=20
let isMarried=false
let year=2024
console.log(typeof firstName)               
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)
console.log(typeof '10'==10)
console.log(parseInt('9.8')==10)

//Check the truthiness and falsiness of the following values: 3, "hello", -1, null, undefined, "false"
console.log(Boolean(3))
console.log(Boolean("hello"))
console.log(Boolean(-1))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean("false"))

//Use the Date object to do the following activities
const ne=new Date()
console.log(ne.getFullYear())
console.log(ne.getMonth()+1)
console.log(ne.getDate())
console.log(ne.getDay())
console.log(ne.getHours())
console.log(ne.getMinutes())
console.log(ne.getTime())

//Level 2 Exercises

let base=prompt("Enter base:")
let height=prompt("Enter height:")
let area=0.5*base*height
console.log("The area of the triangle is "+area)

let a=prompt("Enter side a:")
let b=prompt("Enter side b:")
let c=prompt("Enter side c:")
let perimeter=parseInt(a)+parseInt(b)+parseInt(c)
console.log("The perimeter of the triangle is "+perimeter)

let length=prompt("Enter length:")
let width=prompt("Enter width:")
let areaRect=length*width
let perimeterRect=2*(parseInt(length)+parseInt(width))
console.log("The area of the rectangle is "+areaRect)
console.log("The perimeter of the rectangle is "+perimeterRect)

let radius=prompt("Enter radius:")
let pi=3.14
let areaCircle=pi*radius*radius
let circumference=2*pi*radius
console.log("The area of the circle is "+areaCircle)
console.log("The circumference of the circle is "+circumference)

let y=prompt("Enter y:")
let slope=2*x-2
console.log("The slope of the line is "+slope)

let x1=2
let x2=6
let m=(y2-y1)/(x2-x1)
console.log("The slope between the points is "+m)
let x=-3
let y1=2*x-2
console.log("The value of y is "+y1)

let hour=40
let rate=15
let weeklyEarnings=hour*rate
console.log("The weekly earnings are $"+weeklyEarnings)
let name=prompt("Enter your name:")
if(name.length>=7){
    console.log("Your name is long")
}else{
    console.log("Your name is short")
}


//Level 3 Exercises

const ab=new Date()
let years=a.getFullYear()
let month=a.getMonth()+1
let date=(a.getDate().padStart(2,'0'))
let hours=a.getHours().toString().padStart(2,'0')
let minutes=a.getMinutes().toString().padStart(2,'0')
console.log(`${years}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${years} ${hours}:${minutes}`)
console.log(`${date}/${month}/${years} ${hours}:${minutes}`)


