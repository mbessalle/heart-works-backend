const { Router } = require("express");
const auth = require("../auth/middleware");
const Artwork = require("../models").artwork;
const Bid = require("../models").bid;

const router = new Router();

router.patch("/:id", async (req, res) => {
  const artwork = await Artwork.findByPk(req.params.id);
  if (!artwork.userId === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this page" });
  }
  const { title, imageUrl, hearts, minimumBid } = req.body;

  await artwork.update({ hearts });

  return res.status(200).send({ artwork });
});

router.post("/:id/bids", auth, async (req, res) => {
  const artwork = await Artwork.findByPk(req.params.id);
  console.log(artwork);

  if (artwork === null) {
    return res.status(404).send({ message: "This artwork does not exist" });
  }

  if (!artwork.userId === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this page" });
  }

  const { title, imageUrl, minimumBid, hearts } = req.body;
  if (!title || !imageUrl || !minimumBid) {
    return res
      .status(400)
      .send({ message: "Please provide all the necessary information" });
  }

  const bid = await Bid.create({
    email,
    amount,
    artworkId: artwork.id,
  });

  return res.status(201).send({ message: "Bid created", bid });
});

router.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const artwork = await Artwork.findAndCountAll({
    limit,
    offset,
    include: [Bid],
    order: [[Bid, "createdAt", "DESC"]],
  });
  res.status(200).send({ message: "ok", artwork });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "artwork id is not a number" });
  }

  const artwork = await Artwork.findByPk(id, {
    include: [Bid],
    order: [[Bid, "createdAt", "DESC"]],
  });

  if (artwork === null) {
    return res.status(404).send({ message: "artwork not found" });
  }

  res.status(200).send({ message: "ok", artwork });
});

module.exports = router;
