let a = 'дим';
let b = 'an';
let c = 'рота';
let d = 'аргентинам';

 function turnoff(str) {
    
    let string = str.trim();
    let arr = string.split("").reverse();
    arr.splice(0,1)
    let turnoff = arr.join("");
    return turnoff;
}

let reverse = a + turnoff(a);
console.log (reverse);

let reverse2 = b + turnoff(b);
console.log (reverse2);

let reverse3 = c + turnoff(c);
console.log (reverse3);
