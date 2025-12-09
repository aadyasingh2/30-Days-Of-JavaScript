// this is your main.js script

alert('Open the browser console whenever you work on JavaScript')

let x=prompt("Enter your age:")
if (x>=18){
    console.log("You are old enough to drive.")    
    }else{
    console.log("You are not old enough to drive.")
    }
let myAge
let yourAge
myAge=25
yourAge=prompt("Enter your age:")
let ageDiff=myAge-yourAge
if (ageDiff>0){
    console.log(`I am ${ageDiff} years older than you.`)
}else if (ageDiff<0){
    console.log(`You are ${-ageDiff} years older than me.`)
}else{
    console.log("We are the same age.")
}

let a=4
let b=3
if (a>b){
    console.log(`${a} is greater than ${b}`)
}
else if (a<b){
    console.log(`${a} is less than ${b}`)
}

// you can also use ternary operators
a>b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`)
// condition ? true statement : false statement
// example

let number=prompt("Enter a number:")
number%2==0 ? console.log(`${number} is an even number`) : console.log(`${number} is an odd number`)
// check if a number is even or odd using ternary operator
// condition ? true statement : false statement

//exercise level 2

let grade =prompt("Enter your score:")
switch (grade){
    case (grade>=80 && grade<=100):
        console.log("A")
        break
    case (grade>=70 && grade<80):
        console.log("B")
        break
    case (grade>=60 && grade<70):
        console.log("C")
        break
    case (grade>=50 && grade<60):
        console.log("D")
        break
    case (grade>=0 && grade<50):
        console.log("F")
        break   
}
let month=prompt("Enter month:")
switch (month.toLowerCase()){
    case "september":
    case "october":
    case "november":
        console.log("The season is Autumn")
        break
    case "december":
    case "january":
    case "february":
        console.log("The season is Winter")
        break
    case "march":
    case "april":   
    console.log("The season is Spring")
        break
    case "may":
    case "june":
    case "july":
    case "august":
        console.log("The season is Summer")
        break
    default:
        console.log("Invalid month")
}
// check the season using switch case statement based on month input

let day=prompt("Enter day:")
switch (day.toLowerCase()){
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":  
        console.log(`${day} is a working day.`)
        break
    case "saturday":
    case "sunday":
        console.log(`${day} is a weekend.`)
        break
    default:
        console.log("Invalid day")
}
let months=prompt("Enter month number (1-12):")
switch (parseInt(months)){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days")
        break
    case 4:
    case 6:
    case 9: 
    case 11:
        console.log("30 days")
        break  
    case 2:
        console.log("28 days")
        break
    default:
        console.log("Invalid month number")
}

