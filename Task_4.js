	function number3(a, b){
		let total = a + b;
		let sum = String(total);
		let sumCounter = 0;
		let argumentCounter = 0;

			for(count = 0; count < sum.length; count++){
				numberIndex = sum[count];
				if(numberIndex == 3){
					sumCounter += 1;
				}
				else{ sumCounter += 0}
				
			}

			if(a == 3 || b == 3){
				argumentCounter += 1;
			}
			else{ argumentCounter += 0}

			if(sumCounter >= 1 && argumentCounter >= 1){
				document.write("True");
			}
			else{
				document.write("False");
			}

	}
	
	number3(4,3333);