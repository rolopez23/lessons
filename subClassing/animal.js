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

Dog.prototype.oldSpeak = Animal.prototype.speak;

Dog.prototype.speak = function() {
  this.oldSpeak();
  this.oldSpeak();
}

var lassie = new Dog('lassie', 'Rough Collie');
lassie.speak();

Animal.prototype.speak = function() {
  console.log(this.name + ' goes ' + this.sound);
}
// There is no update of the function for Lassie :(
animal.speak();
lassie.speak();

