const app=require("./lineencoding.js");
const encodeline=app.encodeline;
const separate=app.separate;
it("tests simple case",()=>{
	const res=encodeline("aaabbbc");
	expect(res).toEqual("3a3bc");
});	
it("tests argument is string",()=>{	
	expect(()=>{encodeline(5)}).toThrow("InvalidInputError");
})

it("tests line length less than 4",()=>{
	expect(()=>{
		encodeline("aaa");
	}).toThrow("InvalidStringLength");
})

it("tests line length bigger than 15",()=>{
	expect(()=>{
		encodeline("aaabbbbbbbbbbbbbbbbbbbbbbbbbbb");
	}).toThrow("InvalidStringLength");
})
it("tests line only english letters",()=>{
	expect(()=>{encodeline("53333")}).toThrow("InvalidStringError");
});
it("test only one letter 5 times",()=>{
	expect(encodeline("aaaaa")).toBe("5a");
})

it("tests different valid inputs",()=>{
	expect(encodeline("abbcabb")).toEqual("a2bca2b");
	expect(encodeline("abcd")).toEqual("abcd");
	expect(encodeline("abbcabb")).toEqual("a2bca2b");
})

//tests separate
it("tests normal input to separate",()=>{
	expect(separate("aaabbbc")).toEqual(["aaa","bbb","c"])
})
it("tests input length 1 ",()=>{
	expect(separate("a")).toEqual(["a"]);
})
