console.log(countries)
alert('Open the console and check if the countries has been loaded')
//Level 1

//1. Create an empty set

const empty= new Set()
console.log(empty)

//2. Create a set containing 0 to 10 using loop

const to10=new Set()
for(let i =0; i<=10; i++){
    to10.add(i)
}
console.log(to10)

// 3. Remove an element from a set

to10.delete(0)
console.log(to10)

// 4. Clear a set
to10.clear()
console.log(to10)

// Level 2

// 1 

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let c=[...a,...b]
console.log(new Set(c))

// 2 
let B=new Set(b)
const d=a.filter((x)=>B.has(x))
const D=new Set(d)
console.log(D)


// Level 3

// 1

const language=new Set()
for(const l of countries){
    l.languages.forEach((x)=>{
        if (language.has(x)==false){
            language.add(x)
        }
    
    }
)
}
console.log(language)

// 2    
