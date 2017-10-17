module.exports = function (sequelize, DataTypes) {
  const SelfTestRecord = sequelize.define('SelfTestRecord', {
    // 主键
    recordId: {
      type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true,
    },
    // 用户信息
    userId: { type: DataTypes.BIGINT, allowNull: false },
    userName: { type: DataTypes.STRING },
    userPhone: { type: DataTypes.STRING(11), allowNull: false },
    userOpenId: { type: DataTypes.STRING },

    // 分数
    totalScore: { type: DataTypes.INTEGER, allowNull: false },

    // 评价id
    estimateId: { type: DataTypes.BIGINT },
    // 评价内容
    estimate: { type: DataTypes.TEXT },

    // 自测题id
    newsId: { type: DataTypes.BIGINT, allowNull: false },
    // 资讯所属类别 (eg. 糖尿病、痛风等)
    type: { type: DataTypes.INTEGER, allowNull: false },
    // 资讯简介
    introduction: { type: DataTypes.STRING },
  }, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'self_test_record',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  return SelfTestRecord;
};
