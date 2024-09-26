module.exports = (sequelize, DataTypes) => {
    const Cursos = sequelize.define("curso", {
      name: {
        type: DataTypes.STRING
      },
      Costo: {
        type: DataTypes.STRING 
      }
    });
  
    return Cursos;
  };
  
  