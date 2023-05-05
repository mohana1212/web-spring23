// Write a function that takes in a date (1-30). Use a switch statement to determine if the person qualifies for a discount for that particular day.
// If the date is 1, the switch statement should return a string that says “Too early”
// If the date is 15, the switch statement should return a string that says “Here is your discount”
// If the date is 30, it should return “Too late”
// If any other date is entered, it should return “Not a valid date”

function discountDate(day) {
        switch (day) {
                case 1:
                        //console.log("too early");
                        return "too early";
                case 15:
                        //console.log("Here your Discount");
                        return "Here your Discount";
                case 30:
                        //console.log("Too Late");
                        return "Too Late";
                default:
                        //console.log("Not a valid date");
                        return "Not a valid date";
        }
}

console.log(discountDate(30)); //console.log("Too late")

// Write a function that takes in 2 parameters, num1 and num2 where num2 is always greater than num1
// Your function should construct an array that contains all the numbers between num1 and num2.
// You must use a while loop in your function.
// Your function should return that array at the end.
// Ex: input: num1 = 2, num2 = 117, output: [3, 4...more numbers...115, 116]
function takeParameters(num1, num2) {
        let arr1 = [];
        while (num2 - 1 > num1) {
                arr1.push(num1 + 1);
                num1++;
        }
        return arr1;
}

console.log(takeParameters(2, 117)); //console.log(arr1)

// Write a function that takes in an object and returns an array of the keys (or properties) of that object.
// Ex: const myObject = { name: “Jack”, email: “jack@gmail.com”, age: 30 }
// Passing in myObject to the function will return [ “name”, “email”, “age” ]
// Hint: use the “for…in” loop to loop through keys

function myObject(input) {
        let arr1 = [];
        for (const key in input) {
                const value = input[key];
                arr1.push(value);
        }

        return arr1;
}

console.log(myObject({ name: "Jack", email: "jack@gmail.com", age: 30 }));

// Write a function to determine the maximum amount of profit I can make within a 10 days period when I buy and sell a stock.
// The function takes in an array of stock prices. For ex: [ 315, 50, 314, 684 ,100, 648, 132, 50, 98, 45 ]
// The array contains 10 numbers (stock prices). $315 is the price of the stock on the 1st day, $100 is the price of the stock on the 5th day and
//$45 is the price of the stock on the 10th day.

// Your function needs to return the maximum profit I can make from any 10 trading day period given a similar array of numbers like above. In the above example,
//the maximum profit I can make is

// buy on the 2nd day at a price of $50 and sell on the 4th day at $684 for a profit of $684-$50 = $634.
// Hint: You might want to iterate/loop over the array and keep track of some variables outside of the loop, then return that variable at the under of your function.

let stockPrice = [315, 50, 314, 684, 100, 648, 132, 50, 98, 45];

function maxAmountProfit(arr) {
        let maxP = 0; //369
        for (let i = 0; i < arr.length; i++) {
                ///  buying day
                for (let j = i + 1; j < arr.length; j++) {
                        /// selling Day
                        //let k = j-i;
                        let k = arr[i]; //50
                        let l = arr[j]; //684
                        Profit = l - k; // 634
                        maxP = Math.max(Profit, maxP); // here it compares with profit and maxP and returns maximum value
                }
        }
        return maxP;
}

console.log(maxAmountProfit(stockPrice));
//console.log(maxProfit([ 750, 1500, 140, 1684 ,1000, 2755, 315, 3300, 314, 684 ,100, 648, 132, 50, 98, 45, 232, 3430, 198, 45]));

// // console.log(maxP)

// let stockPrice = [315, 50, 314, 684, 100, 648, 132, 50, 98, 45];

// function minAmountloss(arr) {
//         let maxL = 0; //369
//         for (let i = 0; i < arr.length; i++) {
//                 ///  buying day
//                 for (let j = i + 1; j < arr.length; j++) {
//                         /// selling Day
//                         //let k = j-i;
//                         let k = arr[i]; //315
//                         let l = arr[j]; //50
//                         Loss = l - k; // -265
//                         maxL = Math.min(Loss, maxL); // here it compares with Loss and maxL and returns minimum value
//                 }
//         }
//         return maxL;
// }

// //console.log(maxProfit([ 750, 1500, 140, 1684 ,1000, 2755, 315, 3300, 314, 684 ,100, 648, 132, 50, 98, 45, 232, 3430, 198, 45]));
// console.log(maxAmountLoss(stockPrice));
