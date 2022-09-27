
function minMax(arr){
	let minNum=arr[0];
	for (let i=0; i<arr.length; i++){
  if (arr[i] < minNum){
		minNum=arr[i]
	}
	}

    let maxNum=arr[0];
	for (let i=0; i<arr.length; i++){
  if (arr[i] < maxNum){
		maxNum=arr[i]
	}
	}
let resultArray [];
resultArray[0]=minNum
resultArray[0]=maxNum
return (resultArray)
}

//minMax([9,5,23,1,-4,234,,5,76,-334567,6,9.9885,453,10])