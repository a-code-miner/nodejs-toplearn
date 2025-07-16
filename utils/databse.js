import { Sequelize } from "sequelize";

const sequelize = new Sequelize('todo_db', 'root', 'Mortaza1234!', {
    dialect: 'mysql',
    host: 'localhost'
})

export default sequelize
