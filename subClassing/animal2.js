function Animal(sound, name) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.speak = function () {
  console.log(this.sound);
}

var animal = new Animal('I want to eat drums', 'Animal!')
animal.speak();

function Dog(name, breed) {
  Animal.call(this, 'bark', name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;


Dog.prototype.speak = function() {
  Animal.prototype.speak.call(this);
  Animal.prototype.speak.call(this);
}

var lassie = new Dog('lassie', 'Rough Collie');
lassie.speak();

Animal.prototype.speak = function() {
  console.log(this.name + ' goes ' + this.sound);
}

animal.speak();
lassie.speak();