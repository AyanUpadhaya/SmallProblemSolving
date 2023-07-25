// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function makeStringReverse(text){
	let reversed = [];
	for(let i=text.length-1; i>=0;i--){
		reversed.push(text[i]);
		if(reversed.length == text.length){
			break;
		}
	}

	return reversed.join('');
}

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function positiveValuesSum(arr){
	return arr.filter(number=>number>0).reduce((start,next)=>start+next,0)
}




// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function findFrequentElement(arr){
	return arr.find((number,idx,list)=>number === list[idx+1] )
}



// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findIndicesOfTarget(arr,target){
	for(let i = 0; i<arr.length; i++){
		let newValue = arr[i]+arr[i+1]
		if(newValue === target){
			return [i,i+1]
		}

	}
}

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(numberOne,numberTwo,operator){
	let result = 0;
	switch(operator){
		case '+':
			result = numberOne+numberTwo;
			break;
		case '-':
			result = numberOne - numberTwo;
			break;
		case '*':
			result = numberOne * numberTwo;
			break;
		case '/':
			result = numberOne / numberTwo;
			break;
		default:
			result = 0;
	}

	return result;
}

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function convertToIntegerFromRoman(symbol){
	const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
	let result = 0;

	for(let i=0;i<symbol.length;i++){
		let current = roman[symbol.charAt(i)];
		let next = roman[symbol.charAt(i+1)]

		if(next && current<next){
			result -=current;
		}else{
			result +=current;
		}
	}
	return result;
}

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findTheSecondSmallest(arr){
	const sortedArray = arr.sort();
	let secondSmallest = sortedArray[1];
	return secondSmallest;

}
