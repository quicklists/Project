var getDB = require('./connect.js')

function login(email, password, callback) {
    if (email.indexOf('@') > 0 && email.indexOf('.') > 0 && (email.indexOf('com') > 0 || email.indexOf('ca') > 0)) {
        getDB.readFile(email, (err, user) => {
            if(user === 'failed') {
                callback(err, 'failed')
            } else {
                if (password === user.password) {
                    callback(err, user)
                } else {
                    callback(err, 'failed')
                }
            }
        }); 
    } else {
        callback('failed')
    }
}

module.exports = {
    login
}