function reverseString(s) {
    try {
        const reverseString = s.split('').reverse().join('');
        console.log(reverseString)
    } catch (error) {
        console.log(error.message);
        if (error.message) {
            console.log(s)
        }
    }
}
reverseString(Number(1234))