const {Category} = require('../models')

const getAllService = async () => {
	try {
		return await Category.findAll()
	} catch(error) {
		return false
	}
}

const findOneService = async (id) => {
	try {
		return await Category.findOne({where: {id}})
	} catch(error) {
		return false
	}
}

const addService = async (data) => {
	try {
		return await Category.create(data)
	} catch(error) {
		return false
	}
}

const updateService = async (id, data) => {
	try {
		await Category.update(data, {
			where: {id}
		})
		return await findOneService(id)
	} catch(error) {
		return false
	}
}

const destroyService = async (id) => {
	try {
		return await Category.destroy({
			where: {id}
		})
	} catch(error) {
		return false
	}
}

module.exports = {
	getAllService,
	findOneService,
	addService,
	updateService,
	destroyService
}