'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * 
 * identity: Returns <value> unchanged
 * 
 * @param: {*} value: The value to be returned
 * 
 * @returns: {*} : Returns the value unchanged.
 */
 
 function identity(value){
     // Input: any value
   //output: value unchanged
   //contstraints: N/A
   //edge cases: N/A
   
    return value;
 }
 module.exports.identity = identity;
 
 
 /**
  * 
  * typeOf: Returns <value> type as a string.
  * 
  * @param: {*} value: the value to be determined
  * 
  * @returns: {*} : returns the value type as a string.
  */
  
  function typeOf (value){
  // Input: any value
  // Output: String of type of value.
  //Constraints: Must return a string of the type of value.
  //edge cases: N/A
  
  
    if(Array.isArray(value)){
        return 'array';
    } else if(value === null){
        return "null";
    } else if (value === undefined){
        return 'undefined';
    } else if (value === true || value === false){
        return "boolean";
    } else if (typeof value === 'string'){
        return 'string';
    } else if (typeof value === 'number'){
        return 'number';
    } else if (typeof value === 'object'){
        return 'object';
    } else if (value instanceof Function){
        return 'function';
    }
        
    };
module.exports.typeOf = typeOf;

/**
 * first: Returns the first occurence of a number in an array.
 * 
 * @param: Array, Number
 * 
 * @returns: First Element if no number is given, otherwise returns first number item in the array.
 */
_.first = function(array, number){
    // Inputs: Array, Number
    // Outputs: if there is no array [], if number is not given return first element in the array, If they both exist return the first number item of array.
    // Constraints:  Must return an array of some kind
    //Edge Cases: If number is negative or greater than array.length.
    if(!Array.isArray(array) || number < 0){
        return [];

    } else if(!number){
        return array[0];

    } else if (number > array.length){
        return array;
    }
    var newArr = [];

    for(let i = 0; i < array.length - 1; i++){

        if(number > i){

            newArr.push(array[i]);
        }
    }
    return newArr;

};

module.exports.first = first;

/**
 * last: Returns the last <number> item in <array>
 * 
 * @param: Array, Number
 * 
 * @returns: [] if no <array> is given, If <number> isnt given then return last <element> in ,<array>.
 *              Otherwise return the last <number> item of <array>
 */
 
 _.last = function (array, number){
    //Inputs: an array and a number
    //Outputs: an empty array, the last element in array, or given number of last elements in array
    //Constraints:
    // Edge Cases: if number is negative or greater than the length of the array.
    // test if the array is an array or if number is a negative number.
 if(!Array.isArray(array) || number < 0){
        return [];
  // test if number exist at all.
    } else if(!number){
        return array[array.length - 1];
   // test if the number is greater than the length of the array.
    } else if (number > array.length){
        return array;
    }
    // Create a container for our returned values.
    var newArr = [];
   // start at the end of the array and work towards the beginning with a for in loop
    for(let i = array.length - 1; i > 0; i--){
       // test if number is greater than or equal to the index we are at
        if(number >= i){
         // If this is true then remove and return the last element in the array.
            newArr.unshift(array[i]);
        }
    }
   // return our container array.
    return newArr;

};
module.exports.last = last;


/**
 * indexOf: Returns the first occurence of <value> in <array>, or -1 if <value> is in the <array>
 *          Also returns -1 if the <value> is not in <array>.
 * 
 * @param: {*} : Any value to be determined
 *          Also takes an <array>.
 * 
 * @returns: The index of the first occruence of <value>, -1 if no <value> is given
 *              
 */
 
 _.indexOf = function(array, value){
    // Inputs: Array, Value
    //Outputs: the first occurence of the value in the array, -1 if the value isnt in array
    // Constraints:
    //Edge Cases: If there is more than one occurence of value in array? If value isnt in array.

    // We need to loop through our array
    for(let i = 0; i <= array.length - 1; i++){
        // Test for first occurence of value in array

        if(array[i] === value){
            return i;

        }
  // If there is no occurence of value in the array or if it isnt in the array.
    } return -1;


};
module.exports.indexOf = indexOf;

/**
 * contains: returns true if <value> is in <array>, Other wise return false.
 * 
 * @param: {*}: Any kind of <value>.
 *          Also takes an <Array>.
 * 
 * @returns: True if <value is in <array>, false otherwise.
 */
 _.contains = function(array, value){
  // Inputs: An Array, and a Value
  //Outputs: True if array contains value, false otherwise
  //Constraints: Must use ternary Operator.
  //Edge Cases: What if no value is given.



    // We need to loop through our array
    for(let i = 0; i <= array.length - 1; i++){
     // Test if there is an occurence of value in the array.
        if (value === array[i]){

            return true;

    }

   // If there is no occurence of value, or it doesnt exist, return false
   }
    return false};
module.exports.contains = contains;

/**
 * Each: Calls a Function for each value in an Array or Object
 * 
 * @param: {*} Collection of some sort
 *          CallBack Function.
 * 
 * @returns: Does not return anything.
 * 
 */
 _.each = function(collection, action){
    //Input: Collection and a Function (Array, or Object).
    //Output: We want to use function on each element in collection
    // Constraints: Must use function on each element in collection.
    //Edge Cases: If there are no occurences of value in colleciton.

//Test if the collection is an Array
  if(Array.isArray(collection)){
    //Loop through the Array
      for(let i = 0; i < collection.length; i++){
       // Use action on every element in array
          action(collection[i], i, collection);
      }
  }// If the collection is not an Array
  else if(typeof collection === 'object'){
     // Loop through the collection
      for(let key in collection){
     // Use aciton on each element in collection
      action(collection[key], key, collection);
  }}


};
module.exports.each = each;

/**
 * Unique: used to modify an array and remove all of the duplicates inside .
 * 
 * @param: Array
 * 
 * @returns: Returns a new Array of all Elements from <array> with duplicates removed.
 * 
 */
 _.unique = function(array){
    // Inputs: An Array
    //Outputs: AN array with all the duplicates in it removed.
    //Constraints: Use indexOf().
    // Edge Cases: What if there are no duplicates?

    // We need to
 // Create a new array container
   let arr1 = [];
 // Loop through the Array
   for(let i = 0; i < array.length; i++){
     // test if there is an occurence of the same index in the array.
       if(arr1.indexOf(array[i]) === -1){
        // Push element into our container array
           arr1.push(array[i]);
       }
// Return our new Array.
   } return arr1;





};
module.exports.unique = unique;


/**
 * Filter: Calls a function for each elemet in <array>
 * 
 * @params: Array, CallBack Function
 * 
 * @returns: Returns a new array of elemetns for which calling <function> returned true.
 */
 _.filter = function(array, funct){
    //Inputs: Array and a Callback Function
    //Outputs: New Array of True Elements
    //Constraints: Must use Callback Function
    //Edge Cases: CallBack Function May not return true or false.

   // Create a new array container
    let arr = [];
  // Loop through our array parameter
    for(let i = 0; i < array.length; i++){
        // If using our parameter function on each element is true
       if(funct(array[i], i, array) === true){
         // Push that element into our container array.
           arr.push(array[i]);
       }
 // return the new array container.
  } return arr;

};
module.exports.filter = filter;

/**
 * Reject: Returns an array of elements that the function returned false for
 * 
 * @param: <array>, <function>
 * 
 * @returns: Returns a new array of elements for which calling <function> returned false.
 */
 
 _.reject = function(array, func){
    //Inputs: Array, and a Function
    // Outputs: New Array of False elements
    //Constraints: Must take a function parameter
    //Edge Cases: Function May not Return true or false.

    // Create a new Array Collection
    let arr = [];
  // Loop through our parameter array.
    for(let i = 0; i < array.length; i++){
        // test if our function is not being used on the elements.
       if(func(array[i], i, array) === false){
         // Push the element into our new array.
           arr.push(array[i]);
       }
 // return our new array collection
  } return arr;




};
module.exports.reject = reject;

/**
 * Partition: Returns two arrays for whih <function> returned truthy or falsy.
 * 
 * @param: <array>, <function>
 * 
 * @returns: Returns an array that is made up of two sub arrays: One that is truthy,
 *              and one that is falsy.
 */
 _.partition = function(array, funct){
    //Inputs: An Array, and A function
    //Outputs: two arrays, one containing truthy values and one containing falsy values
    //Constraints: Must Join the two new arrays when done comparing.
    //Edge Cases: Must return an Array of Arrays.
   let arr1 =[];
   let arr2 = [];
   let arr3 = [];


    // Loop through array
    for(let i = 0; i < array.length; i++){
     // Test if the function returned a true value
       if(funct(array[i], i, array) === true){
         // Push true value into arr1
           arr1.push(array[i]);
      // test if function returns a false value
       }else if(funct(array[i], i, array) === false){
         // Push false value into arr2
           arr2.push(array[i]);
       }
    } // Combine arr1 and arr2 into one array of arrays.
    arr3.push(arr1, arr2);

   // return our new array.
    return arr3;};
module.exports.partition = partition;


/**
 * Map: Loops through Arrays or Objects and Calls <function> on each element passing it
 *          the arguments of the collection, its keys/indexes, and the values.
 * 
 * @param: <Collection>, <Function>.
 * 
 * @returns: New <array> of all the modifies elements.
 * 
 */
 _.map = function(collection, funct){
    //Inputs: Colelction and Function
    //Outputs: A new Array of the value of the function calls on each element.
    //Constraints: Must save new return vales in an array.
    //Edge Case: No collection?
    let newArr = [];
    //test what collection is
    if(Array.isArray(collection) === true){

        for(let i = 0; i < collection.length; i++){

            newArr.push(funct(collection[i], i, collection));

        }
    } else {

        for(let key in collection){

           newArr.push(funct(collection[key], key, collection));


            }
        }
     return newArr;
};
module.exports.map = map;

/**
 * Pluck: uses .Map() to loop thorugh an array of objects and find a certain value.
 * 
 * @param: An <array> of Objects, a Property
 * 
 * @returns: Returns an array containing the value of <property> for every element in <array>
 * 
 */
 _.pluck = function(array, property){
    //Inputs: Array of Objects, A property
    //Outputs: An array with values of property for every element in array
    //Constraints: have to use .map().
    //Edge Cases: N/A

  return  _.map(array, function(element){

        return element[property];

    });
};
module.exports.pluck = pluck;

/**
 * Every: TEst to see if the values in a collection can pass a function test
 * 
 * @params: <Collection, <Function>
 * 
 * @returns: Returns True if all elements are true, False if even one is false,
 *              and if <function> is not provided, provide true for every value that is 
 *              truthy, otherwise return false.
 */
 _.every = function(collection, funct){
    //Inputs: Collection and a Function
    //Outputs: true for every true element, false for one occurence of false, true if no function is provided
    //Constraints: Must return true or false in some sense
    //Edge Cases: If function doesn't return a boolean, if function is not given.
if (!funct){
       if (Array.isArray(collection)){
           for (let i = 0; i < collection.length; i ++){
               if (collection[i] === true){
                   return true;
               }
           } return false;
       }
   }
   if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (funct(collection[i], i, collection) === false){
                return false;
            }
        } return true;
    }
    //if the collection is an object
    else if (typeof collection === 'object'){
        for (let key in collection){
        if (funct(collection[key], key, collection) === false){
            return false;
        }
    } return true;
    }


};
module.exports.every = every;

/**
 * Some: Kind of lke Every, except not every element has to be truthy for it to return true.
 * 
 * @param: <Collection>, <Function>
 * 
 * @returns: IF the calling of <Function> is true for atleast one element, return true.
 *          If it is false for all elements, return false.
 *              If <Function is not provided return true if at least one element is truthy.
 *              Otherwise return false.
 * 
 */
 _.some = function(collection, funct){
    //Inputs: Collection and Function
    ///Outputs: true or false
    // Constraints: Work for both array and object
    //Edge Cases: N/A
    if (!funct){
       if (Array.isArray(collection)){
           for (let i = 0; i < collection.length; i ++){
               if (collection[i] === true){
                   return true;
               }
           } return false;
       }
   }
   if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            if (funct(collection[i], i, collection) === true){
                return true;
            }
        } return false;
    }
    //if the collection is an object
    else if (typeof collection === 'object'){
        for (let key in collection){
        if (funct(collection[key], key, collection) === true){
            return true;
        }
    } return false;
    }






}
module.exports.some = some;

/**
 * Reduce: Uses an Acuumulator to collect values as you loop through the array. This 
 *          returns the accumlated values at the end.
 * 
 * @params: <array> , <function>, <seed>
 * 
 * @returns: Returns the last value of the final <function> call.
 */
 _.reduce = function(array, funct, seed){
  //Inputs: Array, Function, Seed
  //Outputs: Return Value of the Final Function Call
  //Constraints: Must execute on every element in the array
  //Edge Cases: what if no seed is given?

//this function can have two routes

//Or there is no seed
       if(seed !== undefined){
        //this is the accumulator value
        let result = seed;
        //loop using .ech function
        _.each(array, function(element, index, array){
            //assign the result of passing each elemnt to the function to the result variable
            result = funct(result, element, index)
            //the each/foreach does not return anything
        })
        return result;
    } else {
        //if no seed given, array[0] is seed
        let result = array[0];
        _.each(array, function(element, index, array){
            //assign the result of passing each elemnt to the function to the result variable
            //only reassing if index is not zero
            if (index !== 0){
            result = funct(result, element, index)
        }    //the each/foreach does not return anything
        })
        return result;
    }
   


}
module.exports.reduce = reduce;

/**
 * Extend: Takes an unlimited amount of objects, Copies the following object properties into
 *          the first object it is given.
 * 
 * @param: Many <Objects> if needed.
 * 
 * @returns: Updated <Object1> of all properties from the other object arguments.
 * 
 */
 _.extend = function(obj1, obj2, obj3){
    //Inputs: One or more objects
    //Outputs: An updated object
    //Constraints: Must return objects
    // Edge Cases: If no object is given?
  return Object.assign(obj1, obj2, obj3);







};
module.exports.extend = extend;