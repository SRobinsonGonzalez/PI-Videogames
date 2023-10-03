import { CLEAR_DETAIL, GET_DETAIL, GET_GENRES, GET_VIDEOGAMES } from "../Actions/actions";

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
        default:
            return { ...state }
    };
};

export default rootReducer;