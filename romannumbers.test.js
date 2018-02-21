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
it("tests 5",()=>{
	expect(toRoman(5)).toBe("V");
})

it("tests 7",()=>{
	expect(toRoman(7)).toBe("VII");
})

it("tests 9",()=>{
	expect(toRoman(9)).toBe("IX");
})

it("tests 0",()=>{
	expect(toRoman(0)).toBe("");
})


it("tests only X",()=>{
	expect(toRoman(10)).toBe("X");
	expect(toRoman(20)).toBe("XX");
	expect(toRoman(30)).toBe("XXX");
});


it("tests 40",()=>{
	expect(toRoman(40)).toBe("XL");
})
it("tests 90",()=>{
	expect(toRoman(90)).toBe("XC");
})

it("tests combinations of units and tens",()=>{
	expect(toRoman(23)).toBe("XXIII");
	expect(toRoman(19)).toBe("XIX");
	expect(toRoman(34)).toBe("XXXIV");
	expect(toRoman(45)).toBe("XLV");
	expect(toRoman(29)).toBe("XXIX");
	expect(toRoman(99)).toBe("XCIX");

})
it("tests 100",()=>{
	expect(toRoman(100)).toBe("C");
})

it("tests 400",()=>{
	expect(toRoman(400)).toBe("CD");
})

it("tests 900",()=>{
	expect(toRoman(900)).toBe("CM");
})

it("tests 500",()=>{
	expect(toRoman(500)).toBe("D");
})

