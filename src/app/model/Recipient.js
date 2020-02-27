import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                street: Sequelize.STRING,
                number: Sequelize.INTEGER,
                zip_code: Sequelize.INTEGER,
                complement: Sequelize.STRING,
                country: Sequelize.STRING,
                city: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Recipient;
