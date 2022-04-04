class Animal {
  constructor(height = 20, weight=50){
    this.height = height;
    this.weight = weight;
  }
}

class Dog extends Animal {
  constructor(bark){
    this.bark = bark;
  }
}
let chia= new Dog();
console.log(chia);
