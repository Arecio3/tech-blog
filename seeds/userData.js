const { User } = require('../models');

const usersData = [
    {
        username: 'Test',
        password: '123456'
    },
    {
        username: 'Test2',
        password: '654321'
    },
];

const seedUser = () => User.bulkCreate(usersData);

module.exports = seedUser;