module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        event_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}