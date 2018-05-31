var signup = require("./public/js/signup.js");

describe("email validation", () => {
	test("Email should have only one @", () => {
		expect(signup.emailValidation('nick@@12@3.ca')).toBe(false)
		expect(signup.emailValidation('nick@@123.ca')).toBe(false)
		expect(signup.emailValidation('@nick@yahoo@.ca')).toBe(false)
		expect(signup.emailValidation('ni@ck@123@.ca')).toBe(false)
		expect(signup.emailValidation('nick@yahoo.ca')).toBe(true)
	});

	test("Email can have any character except '@' before @", () => {
		expect(signup.emailValidation('nick@yahoo.ca')).toBe(true)
		expect(signup.emailValidation('1234567@yahoo.ca')).toBe(true)
		expect(signup.emailValidation('!@yahoo.ca')).toBe(true)
		expect(signup.emailValidation('!#$%^&*()_+@yahoo.ca')).toBe(true)
		expect(signup.emailValidation('nick{}[]@yahoo.ca')).toBe(true)
	});

	test("Email address after @ but before . should be lower case (a-z)", () => {
		expect(signup.emailValidation('nick@yahoo.ca')).toBe(true)
		expect(signup.emailValidation('nick@gMaIL.ca')).toBe(false)
		expect(signup.emailValidation('nick@yaHOO.ca')).toBe(false)
		expect(signup.emailValidation('nick@HOTMAIL.ca')).toBe(false)
		expect(signup.emailValidation('nick@Yahoo.ca')).toBe(false)
		expect(signup.emailValidation('nick@Yahoo1.ca')).toBe(false)
		expect(signup.emailValidation('nick@Y7ho.ca')).toBe(false)
		expect(signup.emailValidation('nick@#$%!.ca')).toBe(false)
	});

	test("Email should end with only 2-4 characters after .", () => {
		expect(signup.emailValidation('nick@yahoo.c')).toBe(false)
		expect(signup.emailValidation('nick@yahoo.com')).toBe(true)
		expect(signup.emailValidation('nick@yahoo.ca')).toBe(true)
		expect(signup.emailValidation('nick@yahoo.net')).toBe(true)
		expect(signup.emailValidation('nick@yahoo.netaa')).toBe(false)
		expect(signup.emailValidation('nick@yahoo.netaaaaaa')).toBe(false)
	});
});

describe('Password strength validation', () => {
	test('Password should be atleast 8 characters long', () => {
		expect(signup.passwordValidation('Passwor4')).toBe(true)
		expect(signup.passwordValidation('Passwor')).toBe(false)
		expect(signup.passwordValidation('Passworddddddd1')).toBe(true)
	});

	test('Password should have atleast 1 capital letter', () => {
		expect(signup.passwordValidation('Password1')).toBe(true)
		expect(signup.passwordValidation('password1')).toBe(false)
		expect(signup.passwordValidation('pasSWord1')).toBe(true)
	});

	test('Password should have atleast 1 number', () => {
		expect(signup.passwordValidation('Password')).toBe(false)
		expect(signup.passwordValidation('Password1')).toBe(true)
		expect(signup.passwordValidation('Pa55w0rd1')).toBe(true)
	});
});