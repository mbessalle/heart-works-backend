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
          amount: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: artwork1.id,
        },
        {
          id: 2,
          email: "a@a.com",
          amount: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: artwork2.id,
        },
        {
          id: 3,
          email: "a@a.com",
          amount: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: artwork1.id,
        },
        {
          id: 4,
          email: "test@test.com",
          amount: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: artwork2.id,
        },
        {
          id: 5,
          email: "a@a.com",
          amount: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
          artworkId: artwork1.id,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("bids", null, {});
  },
};
