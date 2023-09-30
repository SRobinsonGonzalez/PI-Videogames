const { DataTypes } = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('User',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                isEmail: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    );
};