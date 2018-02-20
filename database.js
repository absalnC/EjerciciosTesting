class Database{
	constructor(arr){
		if(arr.length!=16){
			throw new Error("Wrong array length ");
		}
		//probar que arr tenga solo numeros
		if(!arr.reduce((acc,curr)=>typeof curr=="number"&&acc==true,true)){
			throw new Error("Array not numbers");
		}
		if(!arr.reduce((acc,curr)=> acc==true&&curr%1==0,true)){
			throw new Error("Array not integers");
		}
		this.integers=[...arr];
	}
	remove(){
		if(this.integers.length==0){
			throw new Error("InvalidOperationException");
		}
		this.integers=this.integers.slice(0,this.integers.length-1);
	}
	add(integer){
		if(this.integers.length==16||(typeof integer!="number")	||integer%1!=0){
			throw new Error("InvalidOperationException");	
		}
		this.integers.push(integer);
	}
}

exports.Database = Database;