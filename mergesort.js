// whiteboard first to understand
function mergeSort(arr) {  // O(nlogn)
	if (arr.length < 2) return arr;

	const midIndex = Math.floor(arr.length / 2); // O(logn) - (1)
	const leftArr = arr.slice(0, midIndex);
	const rightArr = arr.slice(midIndex, arr.length);

	return merge(mergeSort(leftArr), mergeSort(rightArr));  // O(n) - (2)
}

function merge(leftArr, rightArr) {
	let resultArr = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
		if (leftArr[leftIndex] < rightArr[rightIndex]) {
			resultArr.push(leftArr[leftIndex]);
			leftIndex++;
		}
		else {
			resultArr.push(rightArr[rightIndex]);
			rightIndex++;
		}
	}
	// at this point one of the arrays has been entirely pushed whilst the other hasn't, so we concat to add 
	// the remainder of the array that hasn't been entirely pushed
	return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
}

my_array = [1, 2, 17, 4, 7];
console.log(mergeSort(my_array))
