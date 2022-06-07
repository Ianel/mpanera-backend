const { check } = require("express-validator");
const db = require("../db");

// Password
const password = check('password').isLength({min: 8}).withMessage('Password must be more than or equals to 8 characters');

// Email
const email = check('email').isEmail().withMessage('Please provide a valid email');

// Check if email exists
const emailExists = check('email').custom(async(value) => {
    const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [value]);

    if (rows.length) {
        throw new Error("Email already used");
    }
});

module.exports = {
    registerValidation: [email, password, emailExists] 
};