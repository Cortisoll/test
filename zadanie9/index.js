let obj = {
    a : 1, 
    b : 2,
}

function returnarr(value) {

    return Object.entries(value);
}

console.log (returnarr(obj))