const db = require("../../../models")
const bcrypt = require("bcryptjs")
const User = db.User
const Geolocation = db.Geolocation
const { handleJwt } = require("../../utils/handleJwt")
// const { userMiddleware } = require("../../../config/middleware/user.middleware")


exports.createUser = async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body

    const isEmptykey = Object.keys(req.body).some(key => {
        const value = req.body[key]
        return value === '' || value === null || value === undefined;
    })
    if (isEmptykey) {
        return res.status(400).json({ error: "please do not give empty fileds" })
    }
    try {
        const existingUser = await User.findOne({ where: { email: email } })
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const creatingUser = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            role: role
        })
        await Geolocation.create({ id: creatingUser.id })
        const token = handleJwt.signToken(creatingUser.dataValues)
        res.status(200).json({
            status: true,
            message: "User created successfully",
            data: creatingUser,
            token: token
        })
    }
    catch (err) {
        console.error("Internal error", err)
        res.status(500).json({ error: "Internal server error" })
    }
}
