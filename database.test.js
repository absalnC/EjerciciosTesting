const app=require("./database.js");
const Database=app.Database;

//test de constructores
it("test constructor normal",()=>{
	const arr=[1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];
	const db=new Database(arr)
	expect(db.integers).toEqual(arr);
	expect(db.integers).not.toBe(arr);
});
it("test constructor array size 16",()=>{
	const arr=[7,5,9];
	expect(()=>{new Database(arr)}).toThrow("Wrong array length");
})
it("test constructor array numbers",()=>{
	const arr=[1,2,"hello",2,1,2,1,2,1,2,1,2,1,2,1,2];
	expect(()=>{new Database(arr)}).toThrow("Array not numbers");
	
})
it("test constructor array integers",()=>{
	const arr=[1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,4.5];
	expect(()=>{new Database(arr)}).toThrow("Array not integers");
});
it("test constructor negative and positive integers",()=>{
	const arr=[1,-2,1,2,1,2,1,2,1,2,1,2,1,2,1,3];
	expect(()=>{new Database(arr)}).not.toThrow();
});

//test de remove

it("test remove on full object",()=>{
	const arr=[1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];
	const db=new Database(arr);
	db.remove();
	expect(db.integers).toEqual([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]);
})
it("test less than db.integers.length remove calls on full object",()=>{
	const arr=[1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];
	const db=new Database(arr);
	db.remove();
	db.remove();
	db.remove();
	expect(db.integers).toEqual([1,2,1,2,1,2,1,2,1,2,1,2,1]);
});
it("test more calls to remove than db.integers.length",()=>{
	const arr=[1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];
	const db=new Database(arr);
	expect(()=>{
		for(let i =0;i<18;i++){
			db.remove();
		}
	}).toThrow("InvalidOperationException");
});

//test de add
it("test add on full object",()=>{
	const arr=[1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];
	const db=new Database(arr);
	expect(()=>{db.add()}).toThrow("InvalidOperationException");
})
it("test add on empty with less than max number of objects",()=>{
	const arr=[1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];
	const db=new Database(arr);
	db.remove();
	db.add(13);
	expect(db.integers).toEqual([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,13]);
});
it("tests add not a number to database",()=>{
	const arr=[1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];
	const db=new Database(arr);
	db.remove();
	expect(()=>{db.add("hello")}).toThrow("InvalidOperationException");
})


