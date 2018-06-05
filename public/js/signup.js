var checkImg = 'https://i.pinimg.com/736x/17/91/b9/1791b973f4e58ab7f79ee39860fcceb9--is-the-best-what-is.jpg'
var xImg = 'img/red_x.png'

document.getElementById("usernameInput").addEventListener("keyup", function(){
	var username = document.getElementById('usernameInput').value;
	var usernameImg = document.getElementById('usernameImg');
	var usernameText = document.getElementById('usernameValidText');

	var user = usernameValidation(username)
	usernameImg.style.display = "block";
	if (user === 0) {
		usernameImg.src = xImg
		usernameText.innerHTML = 'Username too short'
		usernameText.style.color = 'red'
	} else if (user === 1) {
		usernameImg.src = xImg
		usernameText.innerHTML = 'Username too long'
		usernameText.style.color = 'red'
	} else {
		usernameImg.src = checkImg
		usernameText.innerHTML = 'Username ok!'
		usernameText.style.color = 'green'
	}
});

document.getElementById("emailInput").addEventListener("keyup", function(){
	var email = document.getElementById('emailInput').value;
	var emailImg = document.getElementById('emailImg');
	var emailText = document.getElementById('emailValidText');

	emailImg.style.display = "block";
	if (emailValidation(email)) {
		emailImg.src = checkImg
		emailText.innerHTML = 'Email ok!'
		emailText.style.color = 'green'
	} else {
		emailImg.src = xImg
		emailText.innerHTML = 'Email format incorrect'
		emailText.style.color = 'red'
	}
});

document.getElementById("passwordInput").addEventListener("keyup", function(){
	var password = document.getElementById('passwordInput').value;
	var passwordImg = document.getElementById('passwordImg');
	var passwordText = document.getElementById('passwordValidText');

	var ps = passwordValidation(password)
	passwordImg.style.display = "block";
	if (ps === true) {
		passwordImg.src = checkImg
		passwordText.innerHTML = 'Password ok!'
		passwordText.style.color = 'green'
	} else if (ps === 0) {
		passwordImg.src = xImg
		passwordText.innerHTML = 'Password too short'
		passwordText.style.color = 'red'
	} else if (ps === 1) {
		passwordImg.src = xImg
		passwordText.innerHTML = 'Password requires one Capital letter'
		passwordText.style.color = 'red'
	} else if (ps === 2) {
		passwordImg.src = xImg
		passwordText.innerHTML = 'Password requires one number'
		passwordText.style.color = 'red'
	}

	var repassword = document.getElementById('repasswordInput').value;
	var repasswordImg = document.getElementById('repasswordImg');
	var repasswordText = document.getElementById('repasswordValidText');

	repasswordImg.style.display = "block";
	if (password === repassword) {
		repasswordImg.src = checkImg
		repasswordText.innerHTML = 'Passwords match!'
		repasswordText.style.color = 'green'
	} else {
		repasswordImg.src = xImg
		repasswordText.innerHTML = 'Passwords dont match'
		repasswordText.style.color = 'red'
	}
});


document.getElementById("repasswordInput").addEventListener("keyup", function(){
	var password = document.getElementById('passwordInput').value;
	var repassword = document.getElementById('repasswordInput').value;
	var repasswordImg = document.getElementById('repasswordImg');
	var repasswordText = document.getElementById('repasswordValidText');

	repasswordImg.style.display = "block";
	if (password === repassword) {
		repasswordImg.src = checkImg
		repasswordText.innerHTML = 'Passwords match!'
		repasswordText.style.color = 'green'
	} else {
		repasswordImg.src = xImg
		repasswordText.innerHTML = 'Passwords dont match'
		repasswordText.style.color = 'red'
	}
});

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