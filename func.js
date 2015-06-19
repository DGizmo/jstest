function upperCaser(input) {
      return input.toUpperCase();
    }
    
module.exports = upperCaser;

function repeat(operation, num) {
      for (var i = 0; i < num; i++) {
      	operation();
      }
    }
    
    module.exports = repeat

function doubleAll(numbers) {
      return numbers.map(function(num){
      	return num*2;
      })

    }
    
    module.exports = doubleAll

function getShortMessages(messages) {
	return messages.map(function(msg){
		return msg.message; 
	}).filter(function(value){
		return value.length<50;
	})
	
	}

    module.exports = getShortMessages

function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(element){
        	return goodUsers.some(function(val){
        		return element.id == val.id;
        	})
        })
      };
    }
    
    module.exports = checkUsersValid

function countWords(inputWords) {
	// var obj = {};
	// inputWords.reduce(function(previousValue, currentValue, index, array) {
	// 	if (index == 1) {
	// 		obj[previousValue] = ++obj[previousValue] || 0) + 1;
	// 		obj[currentValue] = ( obj[currentValue] || 0) + 1;
	// 	} else  {
	// 		obj[currentValue] = ( obj[currentValue] || 0) + 1;
	// 	}
		
	// });
	// return obj;

	function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }
}
    
    module.exports = countWords

function reduce(arr, fn, initial) {
      // SOLUTION GOES HERE
    }
    
    module.exports = reduce










