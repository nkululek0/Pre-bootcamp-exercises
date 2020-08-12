	function vowelReturner(word){
		let vowelDefiner = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
			for(count = 0; count <= word.length; count++){
				for(count2 = 0; count2 <= vowelDefiner.length; count2++){
					let vowel = vowelDefiner[count2];
					let letter = word[count];
						if(letter == vowel){
							console.log(letter);
						}
				}		
			}
	}
	vowelReturner("HellEooO");	
