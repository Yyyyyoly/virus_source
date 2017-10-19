module.exports = function (sequelize, DataTypes) {
  const PVProducts = sequelize.define('PVProducts', {
    // id
    id: {
      type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true, unique: true,
    },
    // 商品详细细信息
    productId: { type: DataTypes.BIGINT, allowNull: false },
    categoryId: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    soldCount: { type: DataTypes.INTEGER },

    // 商品浏览人详细信息
    viewerId: { type: DataTypes.BIGINT, allowNull: false },
    viewerName: { type: DataTypes.STRING },
    viewerOpenId: { type: DataTypes.STRING, allowNull: false },

    // 分享人详细信息 如果有
    shareId: { type: DataTypes.BIGINT, defaultValue: 0 },
    shareName: { type: DataTypes.STRING },
    shareOpenId: { type: DataTypes.STRING, allowNull: false },

    // 分享渠道id 微博 微信
    shareChannel: { type: DataTypes.INTEGER },
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'pv_products',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  return PVProducts;
};
