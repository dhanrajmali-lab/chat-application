import { Sequelize } from "sequelize";

const sequelize = new Sequelize("chat-app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();

  console.log("database is conected");
} catch (error) {
  console.log("database is not conected", error);
}

export default sequelize;
