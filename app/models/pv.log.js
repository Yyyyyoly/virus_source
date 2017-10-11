module.exports = function (sequelize, DataTypes) {
  const PV = sequelize.define('PV', {
    // id
    id: {
      type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true, unique: true,
    },
    // 资讯详细细信息
    newsId: { type: DataTypes.BIGINT, allowNull: false },
    type: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    title: { type: DataTypes.STRING },
    introduction: { type: DataTypes.STRING },

    // 资讯作者详细信息
    writerId: { type: DataTypes.BIGINT, allowNull: false },
    writerName: { type: DataTypes.STRING },
    writerPhone: { type: DataTypes.STRING(11), allowNull: false },

    // 资讯浏览人详细信息
    viewerId: { type: DataTypes.BIGINT, allowNull: false },
    viewerName: { type: DataTypes.STRING },
    viewerPhone: { type: DataTypes.STRING(11), allowNull: false },

    // 分享人详细信息 如果有
    shareId: { type: DataTypes.BIGINT, defaultValue: 0 },
    shareName: { type: DataTypes.STRING },
    sharePhone: { type: DataTypes.STRING(11) },

    // 分享渠道id 微博 微信
    shareChannel: { type: DataTypes.INTEGER },
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'pv',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  return PV;
};
