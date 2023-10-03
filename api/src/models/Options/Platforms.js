const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Platform', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    },
        {
            timestamps: false
        }
    );
};
