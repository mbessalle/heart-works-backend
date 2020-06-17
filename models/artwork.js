"use strict";
module.exports = (sequelize, DataTypes) => {
  const artwork = sequelize.define(
    "artwork",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },

      hearts: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 0,
      },
      minimumBid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {}
  );
  artwork.associate = function (models) {
    artwork.belongsTo(models.user);
    artwork.hasMany(models.bid);
  };
  return artwork;
};
