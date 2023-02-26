
module.exports = function (Sequelize, sequelize, DataTypes){
    return sequelize.define("price",{
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        group : {
            type : DataTypes.INTEGER,
        },
        value : {
            type :  DataTypes.INTEGER,
        },
        createdAt : {
            type: DataTypes.DATE,
			defaultValue: DataTypes.NOW(0)
        },
        updatedAt :{
            type: DataTypes.DATE,
			defaultValue: DataTypes.NOW(0)
        }
    },{
        tableName : "price",
       
    })
}
