"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Project extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Project.hasMany(models.UserProject);
            Project.belongsToMany(models.User, {
                through: models.UserProject, // super many to many
            });
        }

        static getAllProjects() {
            const options = {};
            // if () {

            // }
            return Project.findAll(options);
        }
    }
    Project.init(
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            startDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Project",
        }
    );
    return Project;
};
