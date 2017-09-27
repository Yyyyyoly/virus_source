module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    userId: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING(11), allowNull: false, validate: { len: 11, is: /^1[3578]\d{9}$/ } },
    password: { type: DataTypes.STRING, allowNull: false },
    openId: { type: DataTypes.STRING },
  });
  return User;
};
