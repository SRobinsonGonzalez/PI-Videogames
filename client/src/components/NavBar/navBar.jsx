import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fiterVideoGames, getAllGenres } from "../../redux/Actions/actions";

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

    return (
        <div>
            <Link to="/home" onClick={allVideoGames}>Home</Link>
            <Link to="/form">Form</Link>
            <div>
                <select name="select" placeholder="Order" >
                    <option value=''>Sort by id</option>
                    <option value='A'> Upward</option>
                    <option value='D'> Falling</option>
                </select>
                <select name="select2" placeholder="Gender" onChange={handleFilter}>
                    {genres.map((genre) => (
                        <option
                            key={genre.id}
                            value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
};

export default NavBar;