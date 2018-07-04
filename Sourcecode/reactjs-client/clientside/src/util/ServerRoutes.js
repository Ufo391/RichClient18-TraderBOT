const serverAdress = 'http://localhost:3040/api';

module.exports.login = serverAdress + '/authenticate';
module.exports.register = serverAdress + '/signup';