const { Blog } = require('../models');

const blogData = [
    {
     title: 'SQL vs MongoDB',
     description: 'SQL sucks',
     user_id: 1,
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;