"use strict";
module.exports = (sequelize, DataTypes) => {
  const bid = sequelize.define(
    "bid",
    {
      email: { type: DataTypes.STRING, allowNull: false},
      amount: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  bid.associate = function (models) {
    bid.belongsTo(models.artwork);
  };
  return bid;
};
