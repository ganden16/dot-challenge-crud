'use strict';
const fs = require('fs')
const data = fs.readFileSync('./data/users.json', 'utf-8')
const users = JSON.parse(data)
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {

		let userSeeder = []
		users.forEach(user => {
			userSeeder.push({
				"name": user.name,
				"email": user.email,
				"password": bcrypt.hashSync(user.password, salt),
				"telephone": user.telephone,
				"alamat": user.alamat,
				"role": user.role,
				"createdAt": new Date(),
				"updatedAt": new Date()
			})
		});
		await queryInterface.bulkInsert('Users', userSeeder)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users');
	}
};
