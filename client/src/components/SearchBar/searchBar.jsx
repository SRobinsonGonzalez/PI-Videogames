import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGameByName } from "../../redux/Actions/actions";

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
        <div>
            <div>
                <input
                    type="search"
                    name="searchBar"
                    value={searchName}
                    onChange={inputChange}
                />
                <button onClick={searchHandler}>🔎</button>
            </div>
            {errors && <p>{errors}</p>}
        </div>
    );
};

export default SearchBar;
