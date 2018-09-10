/*
	@Param String str, @Param Char replace, @Param Char replaceWith
	replaces all instances of replace in str, with replaceWith
*/

function replaceWith(str, replace, replaceWith)
{
	var newStr = "";
	for (var i = 0; i < str.length; i++) 
	{
		let charAt = str.charAt(i);
		if (charAt === replace) newStr += replaceWith;
		else newStr += charAt;
	}
	return newStr;
}

function expand(arr, times)
{
	let result = [];
	while (times > 0) {
		result = result.concat(arr);
		times--;
	}

	return result;
}

function acceptNumbersOnly(...inputs)
{
	for (let i of inputs) {
		if (typeof i != "number" || isNaN(i)) 
			return false; 
	}

	return true;
}

function mergeArrays(arr1, arr2) 
{
	return arr1.concat(arr2).sort();
}

function mergeObjects(obj1, obj2) 
{
	var newObj = { };
	for (let prop in obj1) newObj[prop] = obj1[prop];
	for (let prop in obj2) newObj[prop] = obj2[prop];

	return newObj;
}





