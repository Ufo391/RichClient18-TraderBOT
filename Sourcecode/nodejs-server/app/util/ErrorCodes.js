// AUF SERVER UND CLIENT SEITE PFLEGEN!!!

var errorMap = new Map();

var ENUM = {
    SUCCESS: 0,
    USER_ALLREADY_REGISTRED: 1
};

errorMap.set(ENUM.SUCCESS, "Success");
errorMap.set(ENUM.USER_ALLREADY_REGISTRED, "Benutzer ist bereits registriert");

module.exports.Keys = ENUM;
module.exports.Map = errorMap;