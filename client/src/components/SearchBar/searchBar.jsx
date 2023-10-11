import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGameByName } from "../../redux/Actions/actions";
import style from "./searchBar.module.css"

const SearchBar = () => {
    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState('');
    const [errors, setErrors] = useState('');

    const inputChange = (event) => {
        setSearchName(event.target.value);
    };

    const searchHandler = () => {
        dispatch(getGameByName(searchName))
            .catch((error) => {
                setErrors(error.message);
            });
    };

    return (
        <div className={style.searchBar}>
            {errors && <p>{errors}</p>}
            <input
                className={style.search}
                type="search"
                name="searchBar"
                placeholder="  Search Videogame"
                value={searchName}
                onChange={inputChange}>
            </input>

            <button className={style.searchButton} onClick={searchHandler}>🔎</button>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');
            </style>
        </div >
    );
};

export default SearchBar;
