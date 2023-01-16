let string = "DDADSADASDAAADS";
let arr = string.split('');

let finalStr = cortisol(arr).join("");

console.log(finalStr);


function search (value, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return i;
        }
        else{
            continue;
        }
    }
    return -1;
}

function cortisol(array) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {

        let check = search(array[i], newArr);


        if(check === -1){
            newArr.push(array[i]);
        }
    }

    return newArr;
}