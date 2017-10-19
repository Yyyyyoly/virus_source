module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    userId: {
      type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true, unique: true,
    },
    openId: { type: DataTypes.STRING },
    userName: { type: DataTypes.STRING },
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  return User;
};
