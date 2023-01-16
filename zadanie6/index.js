let event1 = ["01:15","02:00"];

let event2 = ["02:00","03:00"];

cortisol(event1);

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

    for (let i = 0; i < array.length; i++) {

        let check = search(array[i], event2);

        console.log(check);
        if(check !== -1){
            console.log(`ошибка: две задачи в ${array[i]}`);
        }
    }
}