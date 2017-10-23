module.exports = function (sequelize, DataTypes) {
  const PointRecord = sequelize.define('PointRecord', {
    // 主键
    recordId: {
      type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true,
    },
    // 操作人id
    viewerId: { type: DataTypes.INTEGER },
    // 分享者id（如果有）
    shareId: { type: DataTypes.BIGINT },
    // 操作编号 ：
    // 浏览获得、评论获得、转发获得、后台提取转化
    operator: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    // 本次变动积分
    changeNum: { type: DataTypes.FLOAT, allowNull: false },
    // 当前总积分
    totalPoint: { type: DataTypes.FLOAT, allowNull: false },
    // 对应的资讯id
    newsId: { type: DataTypes.BIGINT },
    // 对应的商品id
    productId: { type: DataTypes.BIGINT },
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'point_record',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  PointRecord.associate = (models) => { PointRecord.belongsTo(models.User, { foreignKey: 'viewerId', targetKey: 'userId' }); };

  return PointRecord;
};
