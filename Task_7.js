	function farenheitConvertor(temperature){
		let farenheit = (temperature * 9/5) + 32;
		let celsiusPlaceHolder = "deg Celsius";
			console.log(farenheit + " " + celsiusPlaceHolder);
	}
	function celsiusConvertor(temperature){
		let celsius = (temperature - 32)/9*5;
		let rounded = Math.round(celsius);
		let farenheitPlaceHolder = "deg Farenheit";
			console.log(rounded + " " + farenheitPlaceHolder);
	}
	celsiusConvertor(35)
	farenheitConvertor(2);
