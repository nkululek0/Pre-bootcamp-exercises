	function maximum(...numbers){
		let result = -Infinity;
			for(let number of numbers){
				if (number > result){
					result = number;
				}
			} 
			console.log(result);
		}
