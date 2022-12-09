const { add } = require("./add_user");
const { get } = require("./get_users");

module.exports = {
    add_user : (req, res, next) => {
        const body = req.body;
        add(body, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0, 
                    message: "Database Connection Error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    get_user : (req, res) => {
        const body = req.body;
        get(body, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0, 
                    message: "Database Connection Error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }
}