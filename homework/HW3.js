////const input = [64, 94, 73, 678, 34, 254, 900, 875];
/*function findNumberForEach(array, target) {
        array.forEach(function (element) {
                if (element === target)
                        console.log("inside the loop:", element);
                return true;
        });
        return false;
}*/

/*function findForLoop(array, target) {
        for (let index = 0; index < array.lenght; index++) {
                const element = array[index];
                if (element === target) {
                        console.log("inside the for loop:", element);

                        return true;
                }
        }
        return false;
}
console.log(findForLoop(input, 900));*/

//Given an array month: [Jan, Feb, Mar] and a date array: [1, 2, …, 10 ]
const month = ["Jan", "Feb", "Mar"];
const date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function printCalendar(month, date) {
        let day = [];
        for (let i = 0; i < month.length; i++) {
                // i = 1
                for (let j = 0; j < date.length; j++) {
                        // j = 9

                        day.push(month[i]);
                        day.push(date[j]);
                }
        }
        return day;
}
console.log(printCalendar(month, date));

//Create a function called “cloneArray” that will take any array and return a copy of the array.

const arr1 = [1, 4, 7, 3, 9];
function cloneArray(array) {
        if ((array = [...arr1])) {
                // spread operator
                console.log("Clone Array:", array);
                return array;
        }
}
console.log(cloneArray(arr1));

// 3.Write a function that takes in an array arr and a number n

// a) The function should be called getNthElement
// b) The function should check if the array has an element in the nth position or not
// c) If an element exist then it should return that element, otherwise it will return the string “element does not exist”
// d) Ex: function getNthElement (arr, n) { … }

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getNthElement(arr, n) {
        if (n >= arr.length) {
                return "element does not exit";
        } else {
                return arr[n]; //input[7]
        }
}

console.log(getNthElement(input, 7));

// 4) Write your own custom array.push and array.pop method called “customPush” and “customPop”

//  a) CustomPush will take in 2 parameter, an array and an item to push into the array
//      customPush will return the length of the array after adding in the item
//      Ex: customPush(arr, item) { ... }

//  b) customPop will take in an array and remove the last element and return the removed element

arr1 = []; // arr1 = [8]

function customPush(arr, item) {
        n = arr.length;
        arr[n] = item;
        return arr.length;
}

function customPop(arr) {
        if (arr.length === 0) {
                return undefined;
        } else {
                const remove = arr[arr.length - 1];
                arr.length = arr.length - 1;
                return remove;
        }
}

console.log(customPush(arr1, 8));
console.log(customPush(arr1, 67));
console.log(customPush(arr1, 84));
console.log(customPop(arr1));
