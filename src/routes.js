const express = require("express");

const TweetController = require("./controllers/TweetController");
const LikeController = require("./controllers/LikeController");
const Tweet = require('./models/Tweet');

const routes = express.Router();

routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);

routes.post("/likes/:id", LikeController.store);

routes.delete('/tweets/:id', async(req, res) => {
    const tweet = await Tweet.findById(req.params.id);

    await tweet.remove();

    return res.send();
});

module.exports = routes;