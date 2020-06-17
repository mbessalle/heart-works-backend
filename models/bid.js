"use strict";
module.exports = (sequelize, DataTypes) => {
  const bid = sequelize.define(
    "bid",
    {
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      amount: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  bid.associate = function (models) {
    // associations can be defined here
  };
  return bid;
};
