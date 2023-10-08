import CardsContainer from "../../components/CardsContainer/cardsContainer";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getAllVideoGames, paginateGames } from "../../redux/Actions/actions";
import SearchBar from "../../components/SearchBar/searchBar";

const Home = () => {
    const dispatch = useDispatch()
    
    const paginate = (event) => {
        dispatch(paginateGames(event.target.name));
    }

    useEffect(() => {
        dispatch(getAllVideoGames());
    }, []);


    return (
        <div>
            <h1>Home</h1>
            <button name="prev" onClick={paginate}>Prev</button>
            <button name="next" onClick={paginate}>Next</button>
            <SearchBar />
            <CardsContainer />
        </div>
    )
};

export default Home;