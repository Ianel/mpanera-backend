const { getUserByTel, createUserDb } = require("../db/auth.db");
const ErrorHandler  = require("../utils/errorHandler");
const { hashPassword } = require("../utils/password");
const jwt = require("jsonwebtoken");

class AuthService {
    async signup(data) {

        const [ tel, password ] = data;
        const hashedPassword = await hashPassword(password);

        const userByTel = await getUserByTel(tel);

        if (userByTel) {
            throw new ErrorHandler(401, "Phone number already taken");
        }

        const user = await createUserDb(tel, hashedPassword);

        const token = await this.signToken(user);

        return {
            token,
            user
        };

    }

    async signToken(user) {
        try {
            return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        } catch(error) {
            throw new ErrorHandler(error.statusCode, error.message);
        }
        
    }
}

module.exports = new AuthService();