import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {
    constructor(loggerService) {
        this.employees = [];
        this.customers = [];
        this.errors = [];
        this.loggerService = loggerService;
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidity(user)){
                        this.customers.push(user)
                    }
                    
                    break;
                case "employee":
                    if(!this.checkEmployeeValidity(user)){
                        this.employees.push(user);
                    }
                   
                    break;

                default:
                    this.errors.push(new DataError("wrong user type",user));
                    break;
            }
        }
    }
    checkCustomerValidity(user){
        let requiredFields="id firstName lastName age city".split(" ")
        let hasErrors=false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors=true
                this.errors.push(new DataError("validation problem",user))
            }
        }
        if(Number.isNaN(Number(user.age))){
            hasErrors=true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`,user))
        }

        return hasErrors
    }
    checkEmployeeValidity(user){
        let requiredFields="id firstName lastName age city salary".split(" ")
        let hasErrors=false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors=true
                this.errors.push(new DataError("validation problem",user))
            }
        }
        return hasErrors
    }
    add(user) {
       switch (user.type) {
        case "customer":
            if(!this.checkCustomerValidity(user)){
                this.customers.push(user);
            }
            break;
            case "employee":
                if(!this.checkEmployeeValidity(user)){
                    this.employees.push(user);
                }
            break;
        default:this.errors.push(new DataError("this user cannot be added",user));
            break;
       }
        this.loggerService.log(user);
    }
    listCustomers() {
          return this.customers
    }

    getCustomerById(id) {
         return this.customers.find(u=>u.id==id)
    }

    getCustomersSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return 1;
            }
            else if(customer1.firstName===customer2.firstName){
                return 0;
            }
            else{
                return -1;
            }
        })
    }
}
