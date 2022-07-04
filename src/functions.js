function addToCart(productName="elma",quantity) {
    console.log("sepete eklendi : " + productName +" "+quantity)
}
addToCart()
addToCart("elma",10)

let sayHello=()=>{
    console.log("Hello")
}
sayHello()

let sayHello2=function(){
    console.log("hello2")
}
sayHello2()

function addToCart2(productName,quantity,unitPrice) {

}
addToCart2("elma",5,10)

function addToCart3(product) {
        console.log("Ürün : " +product.productName)
        console.log("Fiyat : " +product.unitPrice)
        console.log("Adet : " +product.quantity)
}
let product1={productName:"Elma",unitPrice:10,quantity:5}
addToCart3(product1)

function addToCart4(products) {
    console.log(products)
}
let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"çilek",unitPrice:10,quantity:5},
    {productName:"karpuz",unitPrice:10,quantity:5},
    {productName:"kiraz",unitPrice:10,quantity:5}
]
addToCart4(products)

function add(...numbers) {
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
         total=total + numbers[i]
    }
    console.log(total)
}
add(20,30,40)

function carp(...numbers) {
    let carpim=1
    for (let i = 0; i < numbers.length; i++) {
        carpim=carpim*numbers[i]
        
    }
    console.log(carpim)
}
carp(1,2,3,5)
 