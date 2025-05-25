function unique(arr){
    return [...new Set(arr)]
}

let values = ["Hare", "Krishna", "Krishna", "Krishna", "Krishna", "Hare", "Hare"];

console.log(unique(values))