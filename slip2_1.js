
/*Q1)Create a Node.js file that will convert the output "Full Stack!" into reverse string. */
const originalstring ="Full Stack!";

function reverseString(str){
    return str.split('').reverse().join('');
}

const reversedString=reverseString(originalstring);

console.log(reversedString)


