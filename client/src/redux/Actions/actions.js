import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const GET_GENRES = "GET_GENRES";

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