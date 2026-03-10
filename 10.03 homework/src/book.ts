export default class Book {
    bookName: string;
    author: string;
    wentOut: string;
    price: number;

    showDetails() {
        console.log(this.bookName, this.author, this.wentOut, this.price)
    }
    withoutTax() {
        const result = this.price / 1.17;
        console.log(result);
        return result;
    }
    constructor(bookName: string, author: string, wentOut: string, price: number) {
        this.bookName = bookName;
        this.price = price;
        this.wentOut = wentOut
        this.author = author;
    }




}