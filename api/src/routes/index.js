// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = require('express').Router();

const getGenresRouter = require('./Genres/genresRouter');
const getGamesRouter = require('./Videogames/getVideogameRouter');
const postGamesRouter = require('./Videogames/postVideogameRouter')
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', getGamesRouter);
router.use('/videogames/:id', getGamesRouter);
router.use('/videogames', postGamesRouter);
router.use('/genres', getGenresRouter)

module.exports = router;