function getLetter(s) {
    let letter;
    // Write your code here
    const firstChar = s.charAt(0)
    //@ all sets 
    const firstSet = ['a', 'e', 'i', 'o', 'u'];
    const secondSet = ['b', 'c', 'd', 'f', 'g'];
    const thirdSet = ['h', 'j', 'k', 'l', 'm'];
    const fourthSet = ['n', 'p', 'q', 'r', 's', 't', 'v,', 'w', 'x,', 'y', 'z',]
    //@ first condition 
    if (firstSet.includes(firstChar)) {
        letter = 'A';
    }
    else if (secondSet.includes(firstChar)) {
        letter = "B";
    } else if (thirdSet.includes(firstChar)) {
        letter = "C";
    } else if (fourthSet.includes(firstChar)) {
        letter = 'D';
    }
    return letter;
}
console.log(getLetter('bcdefgh'))