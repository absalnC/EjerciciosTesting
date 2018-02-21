/*
Function toDecimal
Given a string with a roman number, convert it to decimal
***String can have only roman number characters
***String must be a valid roman notation number


Function toRoman
Given an integer, convert it to roman
***arg must be integer
***max number =1000
*** min number =0



*/

function toDecimal(str){

}
function toRoman(number){
	if((typeof number)!="number"){
		throw new Error("InvalidInputError");
	}
	if(number%1!=0){
		throw new Error("InvalidInputError");	
	}
	if(number>1000||number<0){
		throw new Error("NumberOutOfBounds");
	}
	
	console.log("to roman "+number);
	
	const hundreds=(number-number%100)/100;
	number-=hundreds*100;
	const tens=(number-number%10)/10;
	number-=tens*10;
	const units=number%10;
	console.log("units is"+units);
	console.log("tens is "+tens);	
	console.log("hundreds is "+hundreds)
	const unitstring= toRomanUnits(units,"I","V","X");
	const tenstring= toRomanUnits(tens,"X","L","C");
	const hunstring= toRomanUnits(hundreds,"C","D","M");
	return hunstring+tenstring+unitstring;
	
}

function toRomanUnits(number,unit,fivetimes,tentimes){
	const rfives=(number%5);

	let protoies=Array(rfives).fill(unit);
	if(number==4){
		return unit+fivetimes;
	}
	if(number==5){
		return fivetimes;
	}
	if(number==9){
		return unit+tentimes;
	}
	if(number>5){
		return fivetimes+protoies.join("");
	}

	return protoies.join("");
}


exports.toDecimal=toDecimal;
exports.toRoman=toRoman;
exports.toRomanUnits=toRomanUnits;