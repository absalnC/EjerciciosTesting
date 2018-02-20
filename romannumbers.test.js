const app=require("./romannumbers.js");
const toRoman=app.toRoman;
const toDecimal=app.toDecimal;
//tests toRoman

it("tests to be number",()=>{
	expect(()=>{toRoman("string")}).toThrow("InvalidInputError");
})

it("tests to be integer",()=>{
	expect(()=>{toRoman(20.3)}).toThrow("InvalidInputError");
})
it("tests max number",()=>{
	expect(()=>{toRoman(1024)}).toThrow("NumberOutOfBounds");
});
it("tests min number",()=>{
	expect(()=>{toRoman(-35)}).toThrow("NumberOutOfBounds");
})



it("tests only I's",()=>{
	expect(toRoman(3)).toBe("III");
})
it("tests 4 ",()=>{
	expect(toRoman(4)).toBe("IV");
});
//it("tests 9",)
/*
it("tests number bigger than 10",()=>{
	expect(toRoman(53).toBe("L"))
})
it("tests numbers with last digit 9",()=>{
	expect(toRoman(9)).toBe("IX");
	expect(toRoman(599)).toBe("i")
})*/