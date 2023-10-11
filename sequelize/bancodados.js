const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:");

try {
  sequelize.authenticate();
  console.log("Frase positiva.");
} catch (error) {
  console.error("Frase negativa", error);
}
