module.exports = function (sequelize, DataTypes) {
  const PointRecord = sequelize.define('PointRecord', {
    // 主键
    recordId: {
      type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true,
    },
    // 操作人id
    viewerId: { type: DataTypes.INTEGER },
    // 可能值：operator = 1：分享上级uid，没有则为NULL ；operator = 2：分享下级uid
    shareId: { type: DataTypes.BIGINT },
    // 操作编号 ：
    // 1.自己浏览 2.下级浏览 3.自己转发 4.下级转发 5.后台提取
    operator: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    // 操作状态   0: 待处理  1: 已完成
    operatorResult: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
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

  PointRecord.associate = (models) => { PointRecord.belongsTo(models.User, { as: 'Share', foreignKey: 'shareId', targetKey: 'userId' }); };
  PointRecord.associate = (models) => { PointRecord.belongsTo(models.User, { as: 'View', foreignKey: 'viewerId', targetKey: 'userId' }); };
  PointRecord.associate = (models) => { PointRecord.belongsTo(models.News, { foreignKey: 'newsId', targetKey: 'newsId' }); };

  return PointRecord;
};
