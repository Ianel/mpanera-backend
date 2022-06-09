const pool = require("../config/db.config");

const getUserByTel = async (tel) => {
    const user = await pool.query("SELECT phone_number FROM users WHERE phone_number = $1",
    [tel]);
    
    return user[0];
};

const createUserDb = async (phoneNumber, password) => {
    const { rows: user } = await pool.query("INSERT INTO users(phone_number, password) VALUES($1, $2) RETURNING phone_number", 
    [phoneNumber, password]);

    return user[0];
};

module.exports = {
    getUserByTel,
    createUserDb
};