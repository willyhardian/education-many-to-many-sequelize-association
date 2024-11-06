"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UserProject extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // UserProject.belongsTo(models.User);
            // UserProject.belongsTo(models.Project);
        }
    }

    UserProject.init(
        {
            UserId: DataTypes.INTEGER,
            ProjectId: DataTypes.INTEGER,
            role: DataTypes.STRING,
            hoursWorked: DataTypes.INTEGER,
            startDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "UserProject",
        }
    );
    return UserProject;
};
