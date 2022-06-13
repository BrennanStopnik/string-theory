/*
xify - returns the same string, but with every character replaced by an 'x'
Examples:
    xify('hello') -> 'xxxxx'
    xify('hi there') -> 'xxxxxxxx'
*/

console.log("\n")
console.log("TASK: Xify")
function xify(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        newStr = newStr + "x"
    }
    return newStr;
}
console.log(xify("hello"));
console.log(xify("hi there"));


/*
yellingChars - returns the given string with an exclamation point after each character
Examples:
yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
Hints:
We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.
*/

console.log("\n")
console.log("TASK: Yelling Chars")
function yellingChars(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        newStr = newStr + str[i] + "!";
    }
    return newStr;
}
console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));


/*
indexedChars - adds the index of each character before that character in the given string
Examples:
indexedChars('hello') -> '0h1e2l3l4o'
indexedChars('bye') -> '0b1y2e'
Hints:
We can add something BEFORE the current character as well!
*/

console.log("\n")
console.log("TASK: Indexed Chars")
function indexedChars(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        newStr = newStr + i + str[i];
    }
    return newStr;
}
console.log(indexedChars("hello"));
console.log(indexedChars("bye"));


/*
exclaim - returns the given sentence with every question mark or period changed to an exclamation point
Examples:
exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
exclaim('This is fine.') -> 'This is fine!'
*/

console.log("\n")
console.log("TASK: Exclaim")
function exclaim(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] === "." || str[i] === "?"){
            str[i] = "!";
        }
        newStr = newStr + str[i]
    }
    return newStr
}
console.log(exclaim("What are you doing? Are you a fool?"));
console.log(exclaim("This is fine."))


/*
truncate - shortens a long string to 15 characters plus an ellipsis (...)
Examples:
truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."
*/

console.log("\n")
console.log("TASK: Truncate")
function truncate(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
       newStr = str.slice(0,14) + "...";
    }
    return newStr;
}
console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."));
console.log(truncate("Well, that's just, like, your opinion man."));


/*
ciEmailify - creates an email from a two-part name
Examples:
ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
*/

console.log("\n")
console.log("TASK: CI Emailify")
function ciEmailify(f_name, l_name){
    let newStr = "";
    for (let i = 0; i < 30; i++){
        newStr = `${f_name}.${l_name}@codeimmersives`
    }
    return newStr
}
console.log(ciEmailify("brennan", "stopnik"))


/*
reverse - reverses the given string
Examples:
reverse('colin') -> 'niloc'
reverse('mesuara') -> 'arausem'
*/

console.log("\n")
console.log("TASK: Reverse")
function reverse(str){
    let newStr = "";
    for (let i = str.length -1; i >= 0; i--){
        newStr = newStr + str[i];
    }
    return newStr
}
console.log(reverse("colin"));
console.log(reverse("mesuara"));


/*
onlyVowels - returns only the vowels from a word
Examples:
onlyVowels('Colin Jaffe') -> 'oiae'
onlyVowels('quickly') -> 'ui'
onlyVowels('Anthony DeRosa') -> 'Aoeoa'
*/

console.log("\n")
console.log("TASK: Only Vowels")

function onlyVowels(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        let vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]
        if (vowels.includes(str[i])){
            newStr = newStr + str[i];
        }
    }
    return newStr
}
console.log(onlyVowels("Colin Jaffe"));
console.log(onlyVowels("quickly"));
console.log(onlyVowels("Anthony DeRosa"));