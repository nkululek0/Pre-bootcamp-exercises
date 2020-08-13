function time(number, hour, minute){
	let space = " ";
	let hourString = "Hour";
	let minString = "Minute";
	let result;
	let actualMinutes;

//calculation of hours
	function hour(){
		if(number < 60){
			result = 0;
		}
		else if(number >= 60){
				let inputHour = number / 60;
					result = Math.round(inputHour);
						if(result > 1){
							hourString += "s";
						}
						else{
							hourString;
						}
			}
		}

//calculation of minutes
	function minute(){
		if(number < 60){
			actualMinutes = number;
		}
		else{
			let inputMinutes = number / 60;
			let rounded = Math.round(inputMinutes);
			let leftOver = inputMinutes - rounded;
			let minutes = leftOver * 60;
				actualMinutes = Math.round(minutes);
				if(actualMinutes > 1){
					minString += "s";
				}
				else{minString}
			}
	}

	console.log(result + space + hourString + "," + space + actualMinutes + space + minString);
}
