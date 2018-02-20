/*
Given a string, return its encoding defined as follows:

-First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
-Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
-Finally, all the new strings are concatenated together in the same order and a new string is returned.

Restrictions 
Input/Output


[input] string s

String consisting of lowercase English letters.

Guaranteed constraints:
4 ≤ s.length ≤ 15.

[output] string

Encoded version of s.
*/


function encodeline(str){
	if((typeof str)!="string"){
		throw new Error("InvalidInputError");
	}
	if(str.length<4||str.length>15){
		throw new Error("InvalidStringLength");
	}
	if(!/^[A-Za-z]*$/.test(str)){
		throw new Error("InvalidStringError");
	}
	//separar linea en caracteres
	const splitted=str.split("");
	//separar secuencias repetidas de caracteres en multiples arreglos
	// "aaaabbbbc"[["aaaa"],["bbbb"],"c"]
	const seqs=separate(splitted);
	//crear un solo arreglo 
	
	const res=seqs.map((el)=>{
		if(el.length==1){
			return el[0];
		}
		else{
			return el.length+el[0];
		}
	});
	return res.join("");
	
	
}
//como separate se llama siempre con encodeline se asume que la entrada es arreglo generado por cadena valida
function separate(arr){
	if(arr.length==1){
		return[arr];
	}
	let currletter=arr[0];
	let currSeq=[arr[0]];
	let partial=[];	
	for(var i=1;i<arr.length;i++){
		if(arr[i]==currletter){
			currSeq.push(arr[i]);
			if(i==arr.length-1){
				partial.push(currSeq);
				continue;
			}
		}
		else{
			partial.push(currSeq);
			currletter=arr[i];
			currSeq=[arr[i]];

			if(i==arr.length-1){
				partial.push([arr[i]]);
			}
		}
	}

	let result=partial.map(el=>el.join(""));
	
	return result;
}
exports.encodeline=encodeline;
exports.separate=separate;
