const { Router } = require('express');
const { postVideogamesHandler } = require('../../handlers/Videogames/videoGamesHandlers')

const postGamesRouter = Router();

postGamesRouter.post("/", postVideogamesHandler)

module.exports = postGamesRouter;