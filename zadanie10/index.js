let firstObj = {
    a: 1,
    b: 1,
}
let secondObj = {
    a: 1,
    b: 1,
}

function comparsion(obj_1, obj_2){
    const firstObjKeys = Object.keys(obj_1);
    const secondObjKeys = Object.keys(obj_2);

    if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
    }

    for (const prop in firstObj) {
    if (firstObj.hasOwnProperty(prop) && (firstObj[prop] !== secondObj[prop])) {
    return false;
    }
    }

    return true;
}

let result = comparsion(firstObj, secondObj);
console.log(result);