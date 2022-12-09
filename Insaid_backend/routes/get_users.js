const pool = require("./../config/database");

module.exports = {
    get : (data, callBack) => {
        pool.query(
            `select * from users`,
        (error, results, fields) => {
            if(error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
        );
    }
}