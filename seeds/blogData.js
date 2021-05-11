const { Blog } = require('../models');

const blogData = [
    {
        title: 'First Blog',
        description: 'Please work',
    },
    {
        title: 'Second Blog',
        description: 'Helllooooo',
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;