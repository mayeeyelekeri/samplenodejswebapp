const mycalc = require('../calc.js'); 

describe("Calc tests", () => { 

	test("add two numbers", () => { 
		var actualResult = mycalc.sum(10,20)

		expect(actualResult).toBe(30)
	}); 

	test("add nother two numbers", () => { 
		var actualResult = mycalc.sum(0,20)

		expect(actualResult).toBe(20)
	}); 

	test("subtract two numbers", () => { 
		var actualResult = mycalc.diff(10,20)

		expect(actualResult).toBe(-10)
	}); 

	test("subtract two numbers2", () => { 
		var actualResult = mycalc.diff(0,0)

		expect(actualResult).toBe(0)
	}); 

	test("multiply two numbers", () => { 
		var actualResult = mycalc.multiply(10,20)

		expect(actualResult).toBe(200)
	}); 

	test("multiply two numbers2", () => { 
		var actualResult = mycalc.multiply(0,20)

		expect(actualResult).toBe(0)
	}); 

	test("multiply two numbers3", () => { 
		var actualResult = mycalc.multiply(-2,20)

		expect(actualResult).toBe(-40)
	}); 

}); 
