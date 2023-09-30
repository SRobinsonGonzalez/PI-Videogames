const {
    videoGamesController,
    videoGameByIdController,
    videoGameByNameController,
    createVideoGameController,
} = require('../../controllers/Videogames/videoGamesController')

// const getVideogamesHandler = async (req, res) => {
//     try {
//         const data = await videoGamesController();
//         res.status(200).json(data)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// };

const getVideogamesByIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? 'bdd' : 'api';
    try {
        const videogameData = await videoGameByIdController(id, source);
        res.status(200).json(videogameData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

const getVideogamesByNameHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const result = name
            ? await videoGameByNameController(name)
            : await videoGamesController();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//? POST ___________________________________________

const postVideogamesHandler = async (req, res) => {
    try {
        const { name, platforms, genres, image, description, released, rating } = req.body;
        const newVideoGame = await createVideoGameController(name, platforms, genres, image, description, released, rating);
        res.status(200).json(newVideoGame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getVideogamesByIdHandler,
    getVideogamesByNameHandler,
    postVideogamesHandler
}