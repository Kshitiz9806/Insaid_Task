const pool = require("./../config/database")

module.exports = {
    add : (data, callBack) => {
        pool.query(
            `insert into users(name, email, program, mobile, call_Status)
                        values(?,?,?,?,?)`, [
                            data.name,
                            data.email,
                            data.program,
                            data.mobile,
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