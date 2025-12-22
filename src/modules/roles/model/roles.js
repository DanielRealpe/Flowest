import { DataTypes } from 'sequelize';
import { define } from '../../../config/database'; // Ajusta la ruta según tu configuración

const Role = define('Role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'roles',
    timestamps: true
});

export default Role;