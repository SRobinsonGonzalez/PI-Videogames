import { CLEAR_DETAIL, FILTER_GAME, GET_DETAIL, GET_GAME_BYNAME, GET_GENRES, GET_VIDEOGAMES } from "../Actions/actionsTypes";

const initialState = {
    videoGames: [],
    allVideoGames: [],
    detail: [],
    genres: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videoGames: action.payload,
                allVideoGames: action.payload
            };
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            };
        case CLEAR_DETAIL:
            return {
                ...state,
                detail: []
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_GAME_BYNAME:
            return {
                ...state,
                videoGames: action.payload
            }
        case FILTER_GAME:
            const filteredGames = state.allVideoGames.filter((game) => {
                return game.genres.includes(action.payload);
            });
            return {
                ...state,
                videoGames: filteredGames
            };
        default:
            return { ...state }
    };
};

export default rootReducer;