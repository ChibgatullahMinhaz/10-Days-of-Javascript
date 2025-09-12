function vowelsAndConsonants(s) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    for (const char of s) {
        if (vowel.includes(char)) {
            console.log(char)
        }
    }
    for (const char of s) {
        if (!vowel.includes(char)) {
            console.log(char)
        }
    }

}


vowelsAndConsonants('javascriptloops')
// Task

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .