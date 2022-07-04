import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/UserService.js";

console.log("loaded");

let logger1=new MongoLogger()
let userService = new UserService(logger1);
let user1 = new User(1, "engin", "demiroğ", "ankara");
let user2 = new User(2, "Fatma Nur", "Karaman", "Bartın");

userService.add(user1);
//userService.add(user2);

// console.log(userService.list())
// console.log(userService.getById(2));

userService.load()

let customerToAdd=new Customer(5,"ali","yılmaz","antalya","sdhs")
customerToAdd.type="customer"
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)

userService.add(customerToAdd)
console.log(userService.getCustomersSorted())


