function countOccurrences(arr){
    const map = new Map();
    for (let i of arr){
        let count = map.get(i);
        if (count === undefined){
            count = 0;
        }
        map.set(i, count+1);
    }
    return map;
}

const numbers = [1, 2, 3, 4, 2, 1, 3, 5, 6, 5];
const result = countOccurrences(numbers);
console.log(result);