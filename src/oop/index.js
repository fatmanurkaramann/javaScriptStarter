 export class BaseCustomer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber
    }
}

let customer =new BaseCustomer(1,"12345");
console.log(customer.customerNumber)

//Prototyping
customer.name="emre"
console.log(customer.name)

BaseCustomer.name1="fato"
console.log(BaseCustomer.name1)

class IndividualCustomer extends Customer{
constructor(firstName,id,customerNumber){
    super(id,customerNumber)
    this.firstName=firstName

}
}
class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
    super(id,customerNumber)
    this.companyName=companyName
}
}