const seedBlog = require('./blog-seeds');
const seedComment = require('./comment-seeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
   try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedBlog();
    console.log('\n----- BLOG SEEDED -----\n');
    await seedComment();
    process.exit(0);
   }
   catch (err){
       console.log('This is the stupid error' + err);
   }
};

seedAll();