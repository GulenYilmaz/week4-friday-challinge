// CODE CHALLENGE - MEAL COUNT
// Write a function that returns an object which includes the count of food options selected by the developers from the meetup sign-up form array.


//For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];
//your function should return the following object (the order of properties does not matter):
function countMeal(list) {
  
    let count = {};
    list.forEach(i => count[i.meal] = (count[i.meal] || 0) + 1);
    return count;
  
  }


  function countMail(list) {
    let count = {};
    for (let x = 0; x < list.length; x++) {
      let currentCount = count[list[x].language] === undefined ? 0 : count[list[x].mail];
      // let currentCount = count[i.mail] || 0;
      count[list[x].mail] = currentCount + 1;
    }
    return count;
  }
// vegetarian: 2, standard: 1, vegan: 1 }
// Notes:

// The order of the meals count in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.
// there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.
