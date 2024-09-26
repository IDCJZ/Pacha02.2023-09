module.exports = (sequelize, Sequelize) => {
    const Login = sequelize.define("login", {
      user: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Login;
  };
  