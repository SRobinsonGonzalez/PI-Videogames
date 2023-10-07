import { ALPHABETICAL_ORDER, CLEAR_DETAIL, FILTER_GAME, GET_CREATED, GET_DETAIL, GET_GAME_BYNAME, GET_GENRES, GET_UNCREATED, GET_VIDEOGAMES, RATING_ORDER } from "../Actions/actionsTypes";

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
        case GET_CREATED:
            return {
                ...state,
                videoGames: state.allVideoGames.filter((game) => game.created === true)
            };
        case GET_UNCREATED:
            return {
                ...state,
                videoGames: state.allVideoGames.filter((game) => game.created === false)
            };
        case ALPHABETICAL_ORDER:
            let sortedList = [...state.videoGames].sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();

                if (action.payload === 'Up') {
                    return nameA.localeCompare(nameB);
                } else if (action.payload === 'Fall') {
                    return nameB.localeCompare(nameA);
                }
            });
            return {
                ...state,
                videoGames: sortedList
            }
        case RATING_ORDER:
            let sortedRating = [...state.videoGames].sort((a, b) => {
                if (action.payload === 'Upward') {
                    return a.rating - b.rating;
                } else if (action.payload === 'Falling') {
                    return b.rating - a.rating;
                }
            });
            return {
                ...state,
                videoGames: sortedRating
            }
        default:
            return { ...state }
    };
};

export default rootReducer;