var checkImg = 'img/check.png'
var xImg = 'img/red_x.png'

function getInput(name) {
	var value = document.getElementById(name + 'Input').value;
	var img = document.getElementById(name + 'Img');
	var text = document.getElementById(name + 'ValidText');
	return [value, img, text]
}

function updateInputValidation(img, text, msg, color) {
	if (color === 'green') {
		img.src = checkImg
	} else {
		img.src = xImg
	}
	img.style.display = 'block'
	text.innerHTML = msg
	text.style.color = color
}

function updateUsernameValidation() {
	input = getInput('username')
	var user = usernameValidation(input[0])

	if (user === 0) {
		updateInputValidation(input[1], input[2], 'Username too short', 'red')
	} else if (user === 1) {
		updateInputValidation(input[1], input[2], 'Username too long', 'red')
	} else {
		updateInputValidation(input[1], input[2], 'Username ok!', 'green')
	}
}

function updateEmailValidation() {
	input = getInput('email')

	if (emailValidation(input[0])) {
		updateInputValidation(input[1], input[2], 'Email ok!', 'green')
	} else {
		updateInputValidation(input[1], input[2], 'Email format incorrect', 'red')
	}
}

function updatePasswordValidation() {
	input = getInput('password')
	var ps = passwordValidation(input[0])
	if (ps === true) {
		updateInputValidation(input[1], input[2], 'Password ok!', 'green')
	} else if (ps === 0) {
		updateInputValidation(input[1], input[2], 'Password too short', 'red')
	} else if (ps === 1) {
		updateInputValidation(input[1], input[2], 'Password requires one capital letter', 'red')
	} else if (ps === 2) {
		updateInputValidation(input[1], input[2], 'Password requires one number', 'red')
	}

	updateRepasswordValidation()
}

function updateRepasswordValidation() {
	var password = document.getElementById('passwordInput').value;
	input = getInput('repassword')

	if (password === input[0]) {
		updateInputValidation(input[1], input[2], 'Passwords match!', 'green')
	} else {
		updateInputValidation(input[1], input[2], 'Passwords dont match', 'red')
	}
}

/** This check all the fields in the sign up page are filled in correctly
 */
function checkSignup() {
	var username = document.getElementById('usernameInput').value;
	var email = document.getElementById('emailInput').value;
	var password = document.getElementById('passwordInput').value;
	var repassword = document.getElementById('repasswordInput').value;

	// if any entrys are blank display an alert
	if(username === "" || username.indexOf(' ') >= 0) {
		swal("Please enter your Username");
		return false
	} else if(email === "" || password.indexOf(' ') >= 0) {
		swal("Please enter your Email");
		return false
	} else if(password === "" || password.indexOf(' ') >= 0) {
		swal("Please enter your Password")
		return false
	} else if(repassword === "" || repassword.indexOf(' ') >= 0) {
		swal("Re-enter Password cannot be empty")
		return false
	}

	if (emailValidation(email)) {
		if (passwordValidation(password)) {
			if (password != repassword) {
				swal('Passwords do not match')
			} else {
				return true
			}
		} else {
			swal('Password not strong enough (8 long, 1 capital, and 1 number)')
			return false
		}
	} else {
		swal('Email format incorrect')
		return false
	}
}

function usernameValidation(username) {
	if (username.length < 3) {
		return 0
	} else if (username.length > 15) {
		return 1
	} else {
		return true
	}
}

/** Checks for proper email format and returns true / false
 * @param {string} email The users email address
 */
function emailValidation(email) {
	if ((/^[^@]+@[a-z]+\.[a-z]{2,4}$/).test(email)) {
		return true
	} else {
		return false
	}
}

/** Checks the passwords strength
 * @param {string} password The users password
 */
function passwordValidation(password) {
	if (password.length >= 8) {
		if (password.replace(/[^A-Z]/g, '').length > 0) {
			if (password.replace(/[^0-9]/g, '').length > 0) {
				return true
			} else {
				return 2
			}
		} else {
			return 1
		}
	} else {
		return 0
	}
}

module.exports = {
	emailValidation,
	passwordValidation
}