// Function to check if a given string is a palindrome
function isPalindrome(str) {
    // Step 1: Clean the string by removing any non-alphanumeric characters
    // and convert it to lowercase to make the check case-insensitive
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Step 2: Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Step 3: Compare the cleaned string with its reversed version
    // If they are the same, the original string is a palindrome
    return cleanedStr === reversedStr;
}

// Array of words to check for palindromes
const words = ["madam", "dad", "hello"];

// Loop through each word in the array
words.forEach(word => {
    // Use the isPalindrome function to check if the word is a palindrome
    if (isPalindrome(word)) {
        // If the word is a palindrome, log this message
        console.log(`"${word}" is a palindrome.`);
    } else {
        // If the word is not a palindrome, log this message
        console.log(`"${word}" is not a palindrome.`);
    }
});
