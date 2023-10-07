import axios from "axios";
import {
    ALPHABETICAL_ORDER,
    CLEAR_DETAIL,
    FILTER_GAME,
    GET_CREATED,
    GET_DETAIL,
    GET_GAME_BYNAME,
    GET_GENRES,
    GET_UNCREATED,
    GET_VIDEOGAMES,
    RATING_ORDER
} from "./actionsTypes";

export const getAllVideoGames = () => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get('http://localhost:3001/videogames');
            return dispatch({
                type: GET_VIDEOGAMES,
                payload: data
            });
        };
    } catch (error) {
        throw Error(error.message);
    };
};

export const getDetailVideoGame = (id) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get(`http://localhost:3001/videogames/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: data
            });
        };
    } catch (error) {
        throw Error(error.message);
    };
};

export const clearDetail = () => {
    return {
        type: CLEAR_DETAIL
    }
};

export const getAllGenres = () => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get('http://localhost:3001/genres');
            return dispatch({
                type: GET_GENRES,
                payload: data
            });
        };
    } catch (error) {
        throw Error(error.message);
    }
};

export const getGameByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            if (data.length === 0) {
                throw new Error('Not Found');
            }
            return dispatch({
                type: GET_GAME_BYNAME,
                payload: data
            });
        } catch (error) {
            throw Error('This game does not exist');
        }
    };
};

export const fiterVideoGames = (genres) => {
    return {
        type: FILTER_GAME,
        payload: genres
    }
};

export const getCreated = () => {
    return {
        type: GET_CREATED
    }
};

export const getUnCreated = () => {
    return {
        type: GET_UNCREATED
    }
};

export const alphabeticalOrder = (order) => {
    return {
        type: ALPHABETICAL_ORDER,
        payload: order
    }
};

export const ratingOrder = (order) => {
    return {
        type: RATING_ORDER,
        payload: order
    }
};