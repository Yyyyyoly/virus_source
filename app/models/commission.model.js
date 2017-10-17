module.exports = function (sequelize, DataTypes) {
  const Commission = sequelize.define('Commission', {
    // 主键
    recordId: {
      type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true,
    },
    // 分享（获利）用户id
    shareId: { type: DataTypes.BIGINT, allowNull: false },
    // 购买用户的uniqueId
    viewerUniqueId: { type: DataTypes.BIGINT, allowNull: false },
    // 成交订单编号
    orderId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    // 分享商品id
    productId: { type: DataTypes.INTEGER, allowNull: false },
    // 操作编号   1：成交订单获利 2：提现
    operator: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    // 本次变动金额
    changeNum: { type: DataTypes.FLOAT, allowNull: false },
    // 当前佣金总额
    totalCommission: { type: DataTypes.FLOAT, allowNull: false },
    // 分享渠道id
    channel: { type: DataTypes.INTEGER },
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'commission',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  Commission.associate = (models) => { Commission.belongsTo(models.User, { foreignKey: 'shareId', targetKey: 'userId' }); };

  return Commission;
};
