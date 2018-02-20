/*
Function toDecimal
Given a string with a roman number, convert it to decimal
***String can have only roman number characters
***String must be a valid roman notation number


Function toRoman
Given an integer, convert it to roman
***arg must be integer
***max number =10000
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
	
	ies=number%5;
	let protoies=Array(ies).fill("I");
	if(ies==4){
		return "IV";
	}
	
	return protoies.join("");
}
exports.toDecimal=toDecimal;
exports.toRoman=toRoman;