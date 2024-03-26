function firstNonRepeatingCharacter(str)
{
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    charCount = {};
    
    for (let char of str)
    {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    for (let char of str)
    {
        if (charCount[char] === 1)
        {
            return char;
        }
    }
    return null;
}

let str1 = "Hello, how are you?";
console.log(firstNonRepeatingCharacter(str1));

let str2 = "Welcome home, Wilison!";
console.log(firstNonRepeatingCharacter(str2));