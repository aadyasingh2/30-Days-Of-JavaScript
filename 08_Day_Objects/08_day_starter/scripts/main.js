console.log(countries)
alert('Open the console and check if the countries has been loaded')

//Level 1 Exercises
const dog = {}
console.log(dog)
dog.name="JOHNY"
dog.legs=4
dog.color="White"
dog.age=3
dog.bark = function(){
    console.log("Woof Woof")
}
console.log(dog)
dog.bark()
dog.breed="German Shepherd"
dog.getDogInfo = function(){
    return `Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}, Breed: ${this.breed}`
}
console.log(dog.getDogInfo())

//Level 2 Exercises

