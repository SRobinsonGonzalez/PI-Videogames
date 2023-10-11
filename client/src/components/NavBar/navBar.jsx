import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    alphabeticalOrder,
    fiterVideoGames,
    getAllGenres,
    getAllVideoGames,
    getCreated,
    getUnCreated,
    ratingOrder
} from "../../redux/Actions/actions";
import style from "./navBar.module.css"

const NavBar = () => {
    const genres = useSelector((state) => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, []);

    const handleFilter = (event) => {
        dispatch(fiterVideoGames(event.target.value));
    };

    const handleCreatedButton = () => {
        dispatch(getCreated());
    };
    const handleUnCreatedButton = () => {
        dispatch(getUnCreated());
    };

    const handleAllGames = () => {
        dispatch(getAllVideoGames());
    };

    const handleSort = (event) => {
        dispatch(alphabeticalOrder(event.target.value));
    };

    const ratingHandler = (event) => {
        dispatch(ratingOrder(event.target.value))
    };

    return (
        <div className={style.navContainer}>
            <div className={style.navBar}>
                <Link to="/home" className={style.videoHome}>
                    <button>Home</button>
                </Link>
                <Link to="/form">
                    <button>Form</button>
                </Link>
                <h4>Filtros</h4>
                <div>
                    <button
                        value='created'
                        onClick={handleCreatedButton}>Created
                    </button>
                </div>

                <div>
                    <button
                        value='uncreated'
                        onClick={handleUnCreatedButton}>Uncreated
                    </button>
                </div>

                <div >
                    <button
                        className={style.allGames}
                        value="AllGames"
                        onClick={handleAllGames}>All Games
                    </button>
                </div>

                <div>
                    <select
                        name="rating"
                        placeholder="Rating"
                        onChange={ratingHandler}>
                        <option value=''>Sort by rating</option>
                        <option value='Falling'>5➡0</option>
                        <option value='Upward'>0➡5</option>
                    </select>
                </div>

                <div>
                    <select
                        name="alphabetical"
                        placeholder="Alphabetical"
                        onChange={handleSort}>
                        <option value=''>Sort by name</option>
                        <option value='Fall'>Z-A</option>
                        <option value='Up'>A-Z</option>
                    </select>
                </div>

                <div>
                    <select
                        className={style.genres}
                        name="select2"
                        placeholder="Gender"
                        onChange={handleFilter}>
                        <option>Genre selection</option>
                        {genres.map((genre) => (
                            <option
                                key={genre.id}
                                value={genre.name}>
                                {genre.name}
                            </option>
                        ))}
                    </select>
                </div>

                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');
                </style>
            </div >
        </div>
    )
};

export default NavBar;