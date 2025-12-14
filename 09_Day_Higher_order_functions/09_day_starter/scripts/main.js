alert('Open the console and check if the countries has been loaded')
const country = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
country.forEach((x)=>console.log(x))
names.forEach ((y)=>console.log(y))
numbers.forEach((q)=>console.log.apply(console.log(q)))
const len=country.map((x)=>x.length)
console.log(len)
console.log(numbers.map((x)=> x*x))
const upp=names.map((y)=>y.toUpperCase())
console.log(upp)
const price=products.map((z)=>z['price'])
console.log(price)
const land=country.filter((q)=>q.toLowerCase().includes("land"))
console.log(land)
const six=country.filter((a)=>a.length==6)
console.log(six)
const siz=country.filter((q)=>q.length>=6)
console.log(siz)
console.log(country.filter((a)=>a.startsWith("E")))
console.log(products.filter((b) => typeof b.price=='number'))
console.log(numbers.reduce((a,b)=>a+b,0))
console.log(country.reduce((a,b)=>a+b)," ")
