	function time(hours){
		let Hour = "Hour";
		let inputHour = hours / 60;
		let result = Math.round(inputHour);
			if(result > 1){
				Hour += "s";
			}
			else{Hour};

		let Min = "Minute";
		let inputMinutes = hours / 60;
		let rounded = Math.round(inputMinutes);
		let leftOver = inputMinutes - rounded;
		let minutes = leftOver * 60;
		let actualMinutes = Math.round(minutes);
			if(actualMinutes > 1){
				Min += "s";
			}
			else{Min}
		
		console.log(result + ": " + Hour + " " + actualMinutes + ":" + Min);	
	}
	time(60);
