"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "test@test.com" },
    });

    const user2 = await User.findOne({
      where: { email: "a@a.com" },
    });

    return queryInterface.bulkInsert(
      "artworks",
      [
        {
          title: "flowers",
          imageUrl:
            "https://www.gallerytoday.com/43004/basket-with-flowers.jpg",
          hearts: 1,
          minimumBid: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user1.id,
        },
        {
          title: "roses",
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71zNWbTHzxL._SX425_.jpg",
          hearts: 2,
          minimumBid: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user2.id,
        },
        {
          title: "forrest",
          imageUrl:
            "https://images.saatchiart.com/saatchi/834162/art/3772701/2842585-YBVUTQPE-7.jpg",
          hearts: 4,
          minimumBid: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user2.id,
        },
        {
          title: "fairy forrest",
          imageUrl:
            "https://i.pinimg.com/originals/9f/df/f6/9fdff652e9ede83e749618626b711f01.jpg",
          hearts: 8,
          minimumBid: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user2.id,
        },
        {
          title: "mermaids",
          imageUrl:
            "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/nature-shakthidass.jpg",
          hearts: 16,
          minimumBid: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user1.id,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("artworks", null, {});
  },
};
