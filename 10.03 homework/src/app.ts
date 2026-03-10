import Book from "./book.js";
const harryPotter = new Book(`harry potter ` , `ani`, `2001` , 50)
harryPotter.showDetails()
harryPotter.withoutTax()

const mybook= new Book( `meow`,`meow man`,`2015`, 120)
mybook.showDetails()
mybook.withoutTax()