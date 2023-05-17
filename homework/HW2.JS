input = 7;
function age(number) {
        let outPut = "";
        // for(let i=0 ; i>=65 ;i++){
        if (number >= 65) {
                outPut = "Special Discount";
        } else {
                outPut = "Not Allowed";
        }
        return outPut;
}

console.log(age(input));

const input = [154, 657, 564, 561, 154, 678, 100, 154];
function count154(arr) {
        let count = 0;
        //const lenght = arr.lenth-1;
        for (let i = 0; i <= arr.length - 1; i++) {
                //let currentNumber = arr[i];
                if (arr[i] === 154) {
                        count = count + 1;
                }
        }

        return count;
}

console.log(count154(input));

function checkType(input) {
        if (Array.isArray(input) || typeof input === "object") {
                return "object";
        } else {
                return "it's something else";
        }
}

console.log(checkType([]));
console.log(checkType(8));
console.log(checkType("hello"));
console.log(checkType(["hello"], ["World"]));


