const { Comment } = require('../models');

const commentData = [
    {
        content: 'I love MongoDB',
        blog_id: 1,
        user_id: 1
    }
]
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;