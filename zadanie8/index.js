let arr = [ [1,4,5],[1,3,4],[2,6] ];

function returnArr(Array2) {
    let arr_3 = [];
    for (let i = 0; i < Array2.length; i++) {

      for (let k = 0; k < Array2[i].length; k++) {
        arr_3.push(Array2[i][k]);
      }
    }
    return arr_3;
}

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

  let arrSort = returnArr(arr);
  console.log(bubbleSort(arrSort));