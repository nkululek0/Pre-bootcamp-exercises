function triangleArea(side1, side2, side3){
		let sum = (side1 + side2 + side3) * 0.5;
		let area = Math.sqrt(sum * ((sum - side1) * (sum - side2) * (sum - side3)));
		let roundedArea = Math.round(area);
		return roundedArea;
	}
