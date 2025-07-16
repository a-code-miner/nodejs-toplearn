import { DataTypes } from "sequelize";

import sequelize from "../utils/databse";

const Todo = sequelize.define('Todo', {
    // Model attributes
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true // default value is true
    }
})

export default Todo
