module.exports = function (sequelize, DataTypes) {
  const PointRecord = sequelize.define('pointRecord', {
    // 主键
    recordId: {
      type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true,
    },
    // 操作人id
    viewerId: { type: DataTypes.INTEGER, allowNull: false },
    // 分享者id（如果有）
    shareId: { type: DataTypes.BIGINT },
    // 操作编号 ：
    // 增加：1.自己浏览文章 2.自己点赞文章 3.自己评论文章 4.自己转发 5.转发人浏览文章 6.转发人点赞文章 7.转发人评论文章 8.转发人转发
    // 减少：9：兑换
    operator: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    // 本次变动积分
    changeNum: { type: DataTypes.FLOAT, allowNull: false },
    // 当前总积分
    totalPoint: { type: DataTypes.FLOAT, allowNull: false },
    // 对应的资讯id
    newsId: { type: DataTypes.BIGINT },
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'point_record',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  PointRecord.associate = (models) => { PointRecord.belongsTo(models.User, { foreignKey: 'viewerId', targetKey: 'userId' }); };
  PointRecord.associate = (models) => { PointRecord.belongsTo(models.OperationPoint, { foreignKey: 'operator', targetKey: 'id' }); };

  return PointRecord;
};
