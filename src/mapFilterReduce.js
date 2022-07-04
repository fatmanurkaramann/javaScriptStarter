let cart=[
    {id:1,name:"telefon",quantity:3,unitPrice:4000},
    {id:2,name:"bilgisayar",quantity:5,unitPrice:8000},
    {id:3,name:"televizyon",quantity:4,unitPrice:6000}
]

cart.map(product=>{
    console.log(product.name + " : "+product.quantity*product.unitPrice)
}) 

let total=cart.reduce((acc,product)=>acc+product.unitPrice,0)

console.log(total)

let quantityOver2= cart.filter(product=>product.quantity>3)
console.log(quantityOver2)







function refTest(sepet){
    sepet.push({id:4,name:"kitap",quantity:.7,unitPrice:30})

}
refTest(cart)
console.log(cart)

let sayi=10
function sayiTopla(number){
    number+=1
}
sayiTopla(sayi)
console.log(sayi)