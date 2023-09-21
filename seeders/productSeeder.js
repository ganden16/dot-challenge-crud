'use strict';
const fs = require('fs')
const data = fs.readFileSync('./data/products.json', 'utf-8')
const products = JSON.parse(data)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {

		let productSeeder = []
		products.forEach(product => {
			productSeeder.push({
				"name": product.name,
				"description": product.description,
				"category_id": product.category_id,
				"createdAt": new Date(),
				"updatedAt": new Date()
			})
		});
		await queryInterface.bulkInsert('Products', productSeeder)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Products');
	}
};
