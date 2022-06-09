const AuthService = require("../services/auth-service");

exports.signup = async (req, res) => {
    const data = [req.body.tel, req.body.password];
    const user = await AuthService.signup(data);

    res.status(201).json({
        status: "success",
        results: user
    });
};