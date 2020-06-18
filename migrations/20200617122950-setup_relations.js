"use strict";

const artwork = require("../models/artwork");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("artworks", "userId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("bids", "artworkId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "artworks",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn(
      "users",
      "isArtist",
      { type: Sequelize.BOOLEAN, defaultValue:true },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("artworks", "userId");
    await queryInterface.removeColumn("bids", "artworkId");
  },
};
