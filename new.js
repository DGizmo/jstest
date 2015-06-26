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

function getShortMessages(messages) {
	return messages.map(function(msg){
		return msg.message; 
	}).filter(function(value){
		return value.length<50;
	})
	
	}

    module.exports = getShortMessages

function countWords(inputWords) {
      return inputWords.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
       return countMap
      }, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords


function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    var index = reduce.index | 0;
    if (index == arr.length) {
        delete reduce.index;
        return initial;
    }

    initial = fn(initial, arr[index], index, arr);
    reduce.index = index + 1;
    return reduce(arr, fn, initial);
    //need to rewrite
}

module.exports = reduce

function duckCount() {
	return Array.prototype.filter.call(arguments,function(el){
		return Array.prototype.hasOwnProperty.call(el,'quack');
	}).length;
}

module.exports = duckCount

var slice = Array.prototype.slice

function logger(namespace) {
  return function(){
  	console.log.apply(console,[namespace,Array.prototype.slice.call(arguments).join(' ') ]);
  }
}

module.exports = logger

module.exports = function (namespace) {
  return console.log.bind(console,namespace);
}


