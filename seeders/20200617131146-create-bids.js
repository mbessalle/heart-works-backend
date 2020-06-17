"use strict";
const Artwork = require("../models").artwork;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const artwork1 = await Artwork.findOne({
      where: { userId: 1 },
    });

    const artwork2 = await Artwork.findOne({
      where: { userId: 2 },
    });

    return queryInterface.bulkInsert(
      "bids",
      [
        {
          id: 1,
          email: "test@test.com",
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: artwork1.id,
        },
        {
          id: 2,
          email: "a@a.com",
          amount: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: artwork2.id,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("bids", null, {});
  },
};
