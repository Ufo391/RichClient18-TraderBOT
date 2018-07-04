var bcrypt = require('bcrypt');
var db = require('../model/databaseAPI');
var jwt = require('jwt-simple');
var error = require('../util/ErrorCodes');

// Login/Register

function register(req, res) {

    var mail = req.body.mail;
    var password = req.body.password;

    db.findUserByMail(mail, function(result) {

        if (JSON.stringify(result.length) == 0) {
            // Kein Benutzer gefunden
            bcrypt.hash(password, 10, function(err, hash) {
                if (err) {
                    console.log(err);
                }
                res.json({ status: error.Keys.SUCCESS});
                //db.createUser(mail,hash,email,response,res);  
            });
        }
        else {
            // Benutzer ist bereits registriert
            res.json({ status: error.Keys.USER_ALLREADY_REGISTRED});
        }
    });
}

function login(req, res) {

    var name = req.headers.name;
    var password = req.headers.password;

    db.findUserByName(name, function(result) {

        if (result.length == 1) {

            var user = db.qResultToJSON(result);

            compare(password, user.password, function(err, isMatch) {

                if (isMatch && !err) {
                    var token = jwt.encode({
                        username: name,
                        time: new Date().toISOString()
                    }, secret_token);
                    res.json({ success: true, msg: 'JWT ' + token });
                } else {
                    res.json({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
        else {
            res.json({ success: false, msg: 'User not found.' });
        }

    });
}

function response(flag_result, message, resp) {
    resp.json({ success: flag_result, msg: message });
}

function follower(req, res, follower_username) {

    var followable = req.body.followable_username;
    var mode = req.body.mode;

    if (followable === undefined) {
        response(false, "invalid followable: " + followable, res);
    }

    if (mode === undefined || !(mode === 'add' || mode === 'rm')) {
        response(false, "invalid mode: " + mode, res);
    }

    if (mode === 'add') {
        db.addFollower(res, followable, follower_username)
    }
    else {
        db.removeFollower(res, followable, follower_username)
    }

}

// Security

function compare(input, hash, cb) {
    bcrypt.compare(input, hash, function(err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

getToken = function(headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

module.exports.register = register;
module.exports.compare = compare;
module.exports.login = login;
module.exports.follower = follower;