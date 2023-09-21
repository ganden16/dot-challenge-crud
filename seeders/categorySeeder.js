'use strict';
const fs = require('fs')
const data = fs.readFileSync('./data/categories.json', 'utf-8')
const categories = JSON.parse(data)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {

		let categorySeeder = []
		categories.forEach(category => {
			categorySeeder.push({
				"name": category.name,
				"createdAt": new Date(),
				"updatedAt": new Date()
			})
		});
		await queryInterface.bulkInsert('Categories', categorySeeder)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Categories');
	}
};
