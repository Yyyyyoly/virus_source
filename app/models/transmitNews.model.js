module.exports = function (sequelize, DataTypes) {
  const TransmitNews = sequelize.define('TransmitNews', {
    // id
    id: {
      type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true, unique: true,
    },
    // 资讯详细细信息
    newsId: { type: DataTypes.BIGINT, allowNull: false },
    newsClass: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    title: { type: DataTypes.STRING },
    introduction: { type: DataTypes.STRING },
    writerName: { type: DataTypes.STRING, defaultValue: '管理员' },

    // 资讯转发人详细信息
    viewerId: { type: DataTypes.BIGINT, allowNull: false },
    viewerName: { type: DataTypes.STRING },
    viewerOpenId: { type: DataTypes.STRING, allowNull: false },

    // 分享人详细信息 如果有
    shareId: { type: DataTypes.BIGINT, defaultValue: 0 },
    shareName: { type: DataTypes.STRING },
    shareOpenId: { type: DataTypes.STRING },
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'transmit_news',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  return TransmitNews;
};
