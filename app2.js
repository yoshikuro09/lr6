function aclean(arr){
    const m = new Map();
    for (let word of arr){
        const sortword = word.toLowerCase().split('').sort().join('');
        m.set(sortword, word);
    }
    return Array.from(m.values());
}

let arr = ["nap", "teachers", "hectares", "PAN", "ear", "era", "cheaters"];

console.log(aclean(arr));   