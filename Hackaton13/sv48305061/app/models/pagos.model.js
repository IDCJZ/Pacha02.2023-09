module.exports = (sequelize, DataTypes) => {
    const Pagos = sequelize.define("pagos", {
        cast: {
            type: DataTypes.STRING,
        }
    })
    return Pagos;
};