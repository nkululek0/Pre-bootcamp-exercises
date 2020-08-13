	function number3(a, b){
		let total = a + b;
		let sum = String(total);//the total is turned into a string in order to be able to looped through it
		let sumCounter = 0;
		let argumentCounter = 0;

			//this keeps count of whether the input contains a 3 or not
				//if sumCounter is more than 1 that means one of the inputs contains a 3
				//which increases the odds of the output being true
			for(count = 0; count < sum.length; count++){
				numberIndex = sum[count];
					if(numberIndex == 3){
						sumCounter += 1;
					}
					else{
						sumCounter += 0;
					}
			}

			//this checks to see if either of the variables/inputs are a 3
			if(a == 3 || b == 3){
				argumentCounter += 1;
			}
			else{
				argumentCounter += 0;
			}

			//this checks to see if the sum of the inputs contains a 3;
			if(sumCounter >= 1 && argumentCounter >= 1){
				return true;
			}
			else{
				return false;
			}
	}
