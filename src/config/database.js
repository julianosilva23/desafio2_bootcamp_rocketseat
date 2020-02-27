require('dotenv/config');

module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        timestamps: true, // padroniza o create_at, update_att,
        underscored: true,
        underscoredAll: true,
    },
};

// INSTALAR SEQUELIZE
// INSTALAR SEQUELIZE CLI
