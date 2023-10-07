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

const NavBar = () => {
    const allVideoGames = useSelector((state) => state.allVideoGames);
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
        <div>
            <Link to="/home" onClick={allVideoGames}>Home</Link>
            <Link to="/form">Form</Link>
            <div>
                <select
                    name="rating"
                    placeholder="Rating"
                    onChange={ratingHandler}>
                    <option value=''>Sort by rating</option>
                    <option value='Upward'>Upward</option>
                    <option value='Falling'>Falling</option>
                </select>

                <button value="AllGames" onClick={handleAllGames}>All Games</button>

                <select
                    name="alphabetical"
                    placeholder="Alphabetical"
                    onChange={handleSort}>
                    <option value=''>Sort by name</option>
                    <option value='Up'>Upward</option>
                    <option value='Fall'>Falling</option>
                </select>
                Falling
                <select name="select2" placeholder="Gender" onChange={handleFilter}>
                    <option>Genre selection</option>
                    {genres.map((genre) => (
                        <option
                            key={genre.id}
                            value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
                </select>

                <button value='Created' onClick={handleCreatedButton}>Created</button>
                <button value='Uncreated' onClick={handleUnCreatedButton}>Uncreated</button>

            </div>
        </div>
    )
};

export default NavBar;