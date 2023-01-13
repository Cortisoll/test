let arr = [1,2,3,6,8,1,6,3,2,1,0,4];
let arr2 = ['one', 'two','three'];
let arrsort = bubbleSort(arr);

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

console.log (typeof arrsort)
let cortisol = [...arr2, ...arrsort]
console.log (cortisol)