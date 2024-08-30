function areAnagrams(str1, str2) {
    // Step 1: Clean and sort the strings
    const cleanString = (str) => {
        return str.replace(/[^a-zA-Z0-9]/g, '') // Remove non-alphanumeric characters
                  .toLowerCase()               // Convert to lowercase
                  .split('')                   // Convert string to an array of characters
                  .sort()                      // Sort the characters alphabetically
                  .join('');                   // Join the array back into a string
    };

    // Step 2: Compare the cleaned and sorted versions of the strings
    return cleanString(str1) === cleanString(str2);
}

// Array of word pairs to check for anagrams
const wordPairs = [
    ["silent", "listen"],
    ["hello", "world"],
    ["such", "much"]
];

// Loop through each pair and check if they are anagrams
wordPairs.forEach(pair => {
    const [word1, word2] = pair;
    if (areAnagrams(word1, word2)) {
        console.log(`"${word1}" and "${word2}" are anagrams.`);
    } else {
        console.log(`"${word1}" and "${word2}" are not anagrams.`);
    }
});
