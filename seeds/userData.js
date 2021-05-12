const { User } = require('../models');

const usersData = [
    {
        username: 'Test',
        password: '$2b$10$F3rcu8eg2UUxyfHIWYMxK.uAZoEDTmXiyS6RmRbLamYkqLF/EN7Va'
    },
   
];

const seedUser = () => User.bulkCreate(usersData);

module.exports = seedUser;