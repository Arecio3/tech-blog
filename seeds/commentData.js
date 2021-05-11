const { Comment } = require('../models');

const commentData = [
    {
     content: 'Good Post'   
    },
    {
     content: 'Good second Post'   
    },
]
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;