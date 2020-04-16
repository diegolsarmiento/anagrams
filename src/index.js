function anagrams(str1, str2) {

    const array1 = helper(str1)
    const array2 = helper(str2)

    if (array1 === array2) {
        return true;
    } else {
        return false;
    }
}

function helper(string) {
    const result = (string) ? string.replace(/[^\w]/g, '').toLowerCase() : '';
    return result.split('').sort().join('');
}

console.log(anagrams('this is a test', 'test this is a@@@@'));