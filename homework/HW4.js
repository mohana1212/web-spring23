// const arr5 = [7, 5, 8, 9, 3, 4];
// function cloneWithReduce(array) {
//         const clone = array.reduce(function (simulstion, currentelement) {
//                 //console.log("Dublicate:");
//                 return array;
//         });

//         return clone;
// }
// console.log(cloneWithReduce(arr5));

const arr5 = [7, 5, 8, 9, 3, 4];
function cloneWithReduce(array) {
        const clone = array.reduce(function (simulstion, currentelement) {
                simulstion.push(currentelement);
                return simulstion;
        }, []);

        return clone;
}
console.log(cloneWithReduce(arr5));
