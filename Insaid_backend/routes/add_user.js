const pool = require("./../config/database")

module.exports = {
    add : (data, callBack) => {
        pool.query(
            `insert into users(name, email, program, call_Status)
                        values(?,?,?,?)`, [
                            data.name,
                            data.email,
                            data.program,
                            "PENDING"
                        ],
        (error, results, fields) => {
            if(error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    }
}