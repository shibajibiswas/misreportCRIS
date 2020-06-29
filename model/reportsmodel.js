
module.exports = (sequelize, Sequelize) => {
    const mis_earning = sequelize.define("mis_earning", {
      // attributes
    location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      psgn: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
      },
      erng: {
          type: Sequelize.INTEGER
      }
    });
  
    return mis_earning;
  };