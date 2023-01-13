let arr = [6,1,7,3,5,8,0,-1,3,2,4,5];

function binarySearch (arr, value)  {

  let start = 0;

  let end = arr.length - 1;

  while (start <= end) {

    let middle = Math.floor((start + end) / 2);

    if (value === arr[middle] ) return middle;

    if (value < arr[middle]) {

      end = middle - 1;

    } else {

      start = middle + 1;

    }

  }

  return -1;

};

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
  
      for (let j = 0; j < arr.length; j++) {
  
        if (arr[j] > arr[j + 1]) {
  
          let tmp = arr[j];
  
          arr[j] = arr[j + 1];
  
          arr[j + 1] = tmp;
  
        }
  
      }
  
    }
  
    return arr;
  
  }

  let arr2 = bubbleSort (arr)
  console.log(binarySearch(arr2,0))