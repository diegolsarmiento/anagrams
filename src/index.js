
/*

Anagrams: An anagram is a word or phrase 
formed by rearranging the letters of a 
different word or phrase, typically using all 
the original letters exactly once.

Examples

Dormitory = Dirty room.
School master = The classroom.
Conversation = Voices rant on.
Listen = Silent.
Astronomer = Moon starer.
The eyes = They see.
A gentleman = Elegant man.
Funeral = Real fun.

*/

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
console.log(anagrams('Dormitory','Dirty room'));
console.log(anagrams('School master','The classroom'));
console.log(anagrams('Conversation','Voices rant on'));
console.log(anagrams('Listen','Silent'));
console.log(anagrams('Astronomer','Moon starer'));
