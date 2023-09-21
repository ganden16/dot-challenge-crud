const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {
	findOneService,
	addService,
	updateService,
} = require('../service/userService')

const register = async (req, res) => {
	try {
		const newUser = await addService(req.body)
		if(newUser) {
			return res.status(201).json({
				status: true,
				message: "new user has successfully registered",
				data: newUser
			})
		} else {
			return res.status(400).json({
				status: false,
				message: "user failed to register",
			})
		}
	} catch(error) {
		return res.status(500).json({
			status: false,
			message: "internal server error",
		})
	}
}

const login = async (req, res) => {
	const {email, password} = req.body
	try {
		const user = await findOneService(email)
		if(!user) {
			return res.status(400).json({
				errors: [
					{
						message: "wrong email or password",
						field: "email or password"
					}
				]
			})
		}
		const isMatchPassword = bcrypt.compareSync(password, user.password)
		if(!isMatchPassword) {
			return res.status(400).json({
				errors: [
					{
						message: "wrong email or password",
						field: "email or password"
					}
				]
			})
		}
		const token = jwt.sign({
			userId: user.id,
			name: user.name,
			email: user.email,
			role: user.role
		}, process.env.JWT_SECRET_KEY, {
			expiresIn: "1d"
		})
		return res.status(200).json({
			status: true,
			token,
			expiredAt: "1 days"
		})
	} catch(error) {
		return res.status(500).json({
			status: false,
			message: "internal server error"
		})
	}
}

const updateUser = async (req, res) => {
	const isUserExist = await findOneService(req.body.email)
	const isEmailChange = req.body.email != req.user.email
	if(isUserExist && isEmailChange) {
		return res.status(400).json({
			errors: [
				{
					message: "Email already exist, please input different email",
					field: "email"
				}
			]
		})
	}
	const userUpdated = await updateService(req.user.email, req.body)
	if(userUpdated) {
		return res.status(200).json({
			status: true,
			message: "user has been update successfuly",
			data: userUpdated
		})
	} else {
		return res.status(500).json({
			status: false,
			message: "internal server error",
		})
	}
}

const me = async (req, res) => {
	const me = await findOneService(req.user.email)
	return res.status(200).json({
		status: true,
		message: 'who am i',
		data: me
	})
}

module.exports = {register, login, updateUser, me}