// document.getElementById("createacc").addEventListener("click", function(){
// 	var username = document.getElementById('username').value
// 	var email = document.getElementById('email').value;
// 	var password = document.getElementById('password').value;
// 	var repassword = document.getElementById('repassword').value;
	
// 	var msg = checkSignUp(username, email, password, repassword);
// 	if (msg != "Account Created!"){
// 		swal(msg);
// 		document.getElementById('password').value = "";
// 		document.getElementById('repassword').value = "";
// 		if(msg === "Email format incorrect"){
// 			document.getElementById('email').value = "";
// 		}
// 	}
// });

/** This check all the fields in the sign up page are filled in correctly
 */
function checkSignup(){
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var repassword = document.getElementById('repassword').value;

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
		swal{'Email format incorrect'}
		return false
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
				return false
			}
		} else {
			return false
		}
	} else {
		return false
	}
}

module.exports = {
	emailValidation,
	passwordValidation
}