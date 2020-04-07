// In Javascript everything that is not a primitive is an object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// for Array object  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// for Function object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

var object = {};
var objectType = typeof(object);
var objectInstance = object instanceof(Object);

var fun = function() {
  console.log('Javascript is fun');
}

var funType = typeof(fun);
var funInstance = fun instanceof(Object); 
var funInstance2 = fun instanceof(Function);

var array = [];
var arrayType = typeof(array);
var arrayInstance = array instanceof(Object);
var arrayInstance2 = arrary instanceof(Array);

// Important Object Methods you should know
// Object.assign()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


// Object.keys() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys



//Object.create https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create