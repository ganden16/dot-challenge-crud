const {User} = require('../models')
const bcrypt = require('bcrypt')

const findOneService = async (email) => {
	try {
		const user = await User.findOne({
			where: {email}
		})
		console.log(user)
		return user
	} catch(error) {
		return false
	}
}

const addService = async (data) => {
	try {
		console.log(data)
		data.role = 'user'
		data.password = bcrypt.hashSync(data.password, 10)
		const user = await User.create(data)
		return user
	} catch(error) {
		return false
	}
}

const updateService = async (email, data) => {
	try {
		await User.update(data, {
			where: {email}
		})
		const newUpdatedUser = await User.findOne({
			attributes: ["email", "telephone", "name", "alamat"],
			where: {email}
		})
		return newUpdatedUser
	} catch(error) {
		return false
	}
}

module.exports = {
	findOneService,
	addService,
	updateService,
}