const db = require("../database");
const User = db.User

const userMiddleware = {
    userExists: async (req, res, next) => {
        const {
            params: { id },
        } = req;
        const user = await User.findByPk(id);
        if (!user)
            return res.status(404).send({
                success: true,
                message: "user not found",
                user,
            });

        req.oldUser = user;
        return next();
    },
};

module.exports = { userMiddleware };