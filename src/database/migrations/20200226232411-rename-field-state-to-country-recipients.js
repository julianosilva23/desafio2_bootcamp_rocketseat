module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn('recipients', 'state', 'country');
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn('recipients', 'country', 'state');
    },
};
