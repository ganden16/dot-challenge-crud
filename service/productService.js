const {Product, Category} = require('../models')

const getAllService = async () => {
	try {
		return await Product.findAll({
			include: [
				{
					model: Category,
					as: "category",
					attributes: ['name']
				}
			]
		})
	} catch(error) {
		return false
	}
}

const findOneService = async (id) => {
	try {
		return await Product.findOne({
			where: {id},
			include: [
				{
					model: Category,
					as: "category",
					attributes: ['name']
				}
			]
		})
	} catch(error) {
		return false
	}
}

const addService = async (data) => {
	try {
		return await Product.create(data)
	} catch(error) {
		return false
	}
}

const updateService = async (id, data) => {
	try {
		await Product.update(data, {
			where: {id}
		})
		return await findOneService(id)
	} catch(error) {
		return false
	}
}

const destroyService = async (id) => {
	try {
		return await Product.destroy({
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