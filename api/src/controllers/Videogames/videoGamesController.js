require('dotenv').config();
const axios = require('axios');
const { Videogame, Genre } = require('../../db');
const { API_KEY } = process.env;
const { cleanArray, removeTags } = require('../../utils/Videogames/VideogameUtils');
const { Op } = require('sequelize');

const videoGamesController = async () => {
    try {
        const dbVideoGames = await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ['id', 'name']
            }
        });
        const dbVideoGamesWithGenres = dbVideoGames.map((game) => ({
            ...game.toJSON(), //! Convierte el objeto Sequelize a JSON
            Genres: game.Genres.map((genre) => genre.name),
        }));
        const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
        const videoGames = data.results;
        if (!videoGames) {
            throw new Error('No videogames information found');
        }
        const apiGames = cleanArray(videoGames);
        return [...dbVideoGamesWithGenres, ...apiGames];
    } catch (error) {
        throw error
    };
};

const videoGameByIdController = async (id, source) => {
    try {
        const response = source === 'api'
            ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
            : await Videogame.findByPk(id, {
                include: {
                    model: Genre,
                    attributes: ['id', 'name']
                }
            })
        if (!response) {
            throw new Error('Videogame not found!');
        }
        const data = source === 'api' ? response.data : response.toJSON();
        const gameData = {
            id: data.id,
            name: data.name,
            platforms: source === 'api' ? data.platforms?.map(platform => platform.platform.name).join(', ') : data.platforms,
            genres: source === 'api' ? data.genres?.map(genre => genre.name) : data.Genres?.map(genre => genre.name),
            image: data.background_image,
            description: removeTags(data.description),
            released: data.released,
            rating: data.rating,
            created: source === 'api' ? false : data.created
        };
        return gameData;
    } catch (error) {
        throw error;
    }
};

const videoGameByNameController = async (name) => {
    try {
        const dbGames = await Videogame.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
            limit: 15,
            include: {
                model: Genre,
                attributes: ['id', 'name']
            }
        });

        const dbVideoGamesWithGenres = dbGames.map((game) => ({
            ...game.toJSON(), //! Convierte el objeto Sequelize a JSON
            Genres: game.Genres.map((genre) => genre.name),
        }));

        const { data } = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
        const response = data.results;
        const apiGame = cleanArray(response);

        const filterApi = apiGame.filter((game) => game.name.toLowerCase() === name.toLowerCase());
        const apiResults = filterApi.slice(0, 15);

        return [...dbVideoGamesWithGenres, ...apiResults];
    } catch (error) {
        throw error;
    }
};

const createVideoGameController = async (name, platforms, genres, image, description, released, rating) => {
    try {
        if (!genres || genres.length === 0) {
            throw new Error('You must provide at least one genre');
        }
        const genre = await Genre.findAll({ where: { name: genres } });
        const newVideoGame = await Videogame.create({
            name,
            platforms,
            image,
            description,
            released,
            rating,
        });
        await newVideoGame.addGenres(genre); //!
        return newVideoGame;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    videoGamesController,
    videoGameByIdController,
    videoGameByNameController,
    createVideoGameController,
};