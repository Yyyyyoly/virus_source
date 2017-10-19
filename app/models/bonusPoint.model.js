module.exports = function (sequelize, DataTypes) {
  const BonusPoint = sequelize.define('BonusPoint', {
    // 操作说明 ：
    // 1.自己浏览文章 2.自己点赞文章 3.自己评论文章 4.自己转发 5.转发人浏览文章 6.转发人点赞文章 7.转发人评论文章 8.转发人转发
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
