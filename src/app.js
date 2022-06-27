console.log("Merhaba Kodlama.io")

//JS type safe değildir

//  const euroDun=11
//  euroDun=11.20
//  console.log(euroDun) const sabittir ve hata verir


// let konutKredileri=["Konut kredisi","Emlak Kredisi"]

// for (let i = 0; i < konutKredileri.length; i++) {
//     console.log(konutKredileri[i])
// }
// console.log(konutKredileri)


let student={id:1,name:"engin"} //obje tanımı

console.log(student)

function save(puan=10,ogrenci) {
 // console.log(ogrenci.name+ " : " + puan)
}
save(undefined,student) //undefined :puan değeri burda değiştirilemez


let students=["engin","fato","emre"]
//console.log(students)

let students2=[students,{id:2,name:"ibo"},"ankara"]

//console.log(students2)

let showProducts= function(id,...products){
  console.log(id)
  console.log(products[0])

}
//console.log(typeof showProducts)
//showProducts(10,"elma","armut")
let points=[1,6,57,89,9,4,5,8]
console.log()
console.log(Math.max(...points))
console.log("ABC","D",..."EFG","H")

//Destructuring
let populations=[10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,max]] =populations

console.log(small,medium,high,veryHigh,max)

function someFunction([small1],number) {
  console.log(small1)
}
someFunction(populations)

let category= {id:1,name:"içecek"}
console.log(category.id)
console.log(category["name"])


let {id,name}=category
console.log(id)

 
//template literials alıştırma

const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }

  let book= `kitap ${kitap}`
 // console.log(kitap)
//   const bookTable =
//         "<table border>"+
//     "<tbody>"+
//       "<tr>"+
//         "<td>"+"Kitap"+"</td>"+
//         "<td>"+kitap.ad+"</td>"+
//       "</tr>"+
//     "<tr>"+
//         "<td>"+"Yazar"+"</td>"+
//         "<td>"+kitap.yazar+"</td>"+
//       "</tr>"+
//         "<tr>"+
//         "<td>"+"Tarih"+"</td>"+
//         "<td>"+kitap.tarih+"</td>"+
//       "</tr>"+
//    " </tbody>"+
//   "</table>"
//   document.body.innerHTML = bookTable

  const bookTable=`<table border>
  <tbody>
    <tr>
      <td>Kitap Adı</td>
      <td>${kitap.ad}</td>
    </tr>
  <tr>
      <td>Yazar</td>
      <td>${kitap.yazar}</td>
    </tr>
      <tr>
      <td>Tarih</td>
      <td>${kitap.tarih}</td>
    </tr>
  </tbody>
</table>`;
document.body.innerHTML = bookTable