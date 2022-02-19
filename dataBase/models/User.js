module.exports = (sequalizer, dataTypes) => {
    const usuario = "User";
    const cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(50)
        },
        apellido: {
            type: dataTypes.STRING(50)
        },
        email: {
            type: dataTypes.STRING(50)
        },
        contraseña: {
            type: dataTypes.STRING(50)
        },
    }
    
    const config = {
        tableName: "User",
        timestamps: false,
    }
    const User = sequalizer.define(usuario , cols, config);
    return User
}

