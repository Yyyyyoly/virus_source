module.exports = function (sequelize, DataTypes) {
  const PV = sequelize.define('PV', {
    // id
    id: {
      type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true, unique: true,
    },
    // 资讯详细细信息
    newsId: { type: DataTypes.BIGINT, allowNull: false },
    redirectUrl: { type: DataTypes.STRING, allowNull: false, defaultValue: 1 },
    type: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    title: { type: DataTypes.STRING },
    introduction: { type: DataTypes.STRING },
    imgUrl: { type: DataTypes.STRING },
    context: { type: DataTypes.TEXT },

    // 资讯作者详细信息
    writerId: { type: DataTypes.BIGINT, allowNull: false },
    writerName: { type: DataTypes.STRING },
    writerPhone: { type: DataTypes.STRING(11), allowNull: false},
    writerOpenId: { type: DataTypes.STRING },

    // 资讯浏览人详细信息
    viewerId: { type: DataTypes.BIGINT, allowNull: false },
    viewerName: { type: DataTypes.STRING },
    viewerPhone: { type: DataTypes.STRING(11), allowNull: false },
    viewerOpenId: { type: DataTypes.STRING },
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'pv',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  return PV;
};
