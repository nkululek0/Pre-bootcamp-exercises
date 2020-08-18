function commonLetters(word1, word2) {
    let sameLetter = [];
    for (count1 = 0; count1 < word1.length; count1++) {
        for (count2 = 0; count2 < word2.length; count2++) {
            let letters1 = word1[count1];
            let letters2 = word2[count2];
            if (letters1 == letters2) {
                sameLetter.push(letters1);
            }
        }
    }
    console.log(sameLetter);
    console.log('Common Letters: ' + sameLetter);
}
