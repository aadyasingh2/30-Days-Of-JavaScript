// this is your main.js script
//Level 1 Exercises

let challenge =`30 Days of Javascript`
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.split(' ')[0])
console.log(challenge.slice(3));
console.log(challenge.includes("Script"))
console.log(challenge.split(""))
console.log(challenge.split(" "))
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(","))
console.log(challenge.replace("Javascript","Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge.search('J')))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))
console.log("You cannot end a sentence with because because because is a conjunction".indexOf("because"))
console.log("You cannot end a sentence with because because because is a conjunction".lastIndexOf("because"))
console.log("You cannot end a sentence with because because because is a conjunction".search("because"))
console.log(" 30 Days of Javascript ".trim())
console.log(challenge.startsWith("30"))
console.log(challenge.endsWith("t"))
console.log(challenge.match(/a/g))
console.log("30 Days of ".concat(" Javascript"))
console.log(challenge.repeat(2))

//Level 2 Exercises

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log(`"Love is not patronizing and charity isn't about pity, it is about love.
    Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
    console.log(typeof('10')==typeof(10))
    if (typeof('10')==typeof(10)){
        console.log("10 and '10' are same type")    
    }
    else{
        console.log("10 and 10 are not same type")
        console.log(typeof(parseInt('10')))
    }
    console.log(parseFloat('9.8')==10)      
    if (parseFloat('9.8')==10){
        console.log("9.8 and 10 are equal")
    }       
    else{
        console.log("9.8 and 10 are not equal")
        console.log(Math.round(parseFloat('9.8')))
    }
    console.log("python".includes("on") && "jargon".includes("on"))
    console.log("I hope this course is not full of jargon".includes("jargon"))
    console.log(Math.floor(Math.random()*101))
    console.log(Math.floor(Math.random()*51)+50)
    console.log(Math.floor(Math.random()*256))
    const str = 'JavaScript';
    const randomIndex = Math.floor(Math.random() * str.length);
    console.log(str[randomIndex]);
    console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")


