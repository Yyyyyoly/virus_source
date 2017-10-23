module.exports = function (sequelize, DataTypes) {
  const BonusPoint = sequelize.define('BonusPoint', {
    // 操作说明 ：
    // 1.自己浏览 2.下级浏览 3.自己转发 4.下级转发
    operator: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    // 操作对应积分
    pointNum: { type: DataTypes.FLOAT, allowNull: false },
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'bonus_point',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  return BonusPoint;
};
