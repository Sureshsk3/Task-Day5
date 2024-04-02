// 1) Person class

class Person {
 constructor (name,age,qualification,language) {
    this.name = name;
    this.age = age;
    this.qualification = qualification;
    this.language = language;
  }
  personDetails() {
    return `Name : ${this.name}, Age : ${this.age} Qualification : ${this.qualification} Language Known : ${this.language}`;
  }
}
let person1 = new Person(`suresh`,27,`BA`,`Tamil,English`);
console.log(person1.personDetails());

let person2 = new Person(`kobal`,25,`BCA`,`Tamil,English`)
console.log(person2.personDetails())





// 2) Calculate Uber price

class UberPrice {
  constructor( price, distance, discount) {
    this.pricePerKilometer = price;
    this.totalDistance = distance;
    this.totalDiscount = discount;
    
  }

  calculateValue(){
 
   let sum = (this.pricePerKilometer*this.totalDistance)
   let add = sum * this.totalDiscount/100
   let totalOut = (sum - add)
   return totalOut
  }


}

let newOutput = new UberPrice(5, 50, 18)
console.log(newOutput.calculateValue())

let newOutput2 = new UberPrice(3,85,18)
console.log(Math.ceil(newOutput2.calculateValue()))

