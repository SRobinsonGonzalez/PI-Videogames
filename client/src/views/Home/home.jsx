import CardsContainer from "../../components/CardsContainer/cardsContainer";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getAllVideoGames } from "../../redux/Actions/actions";
// import { useSelector } from "react-redux";
import SearchBar from "../../components/SearchBat/searchBar";

const Home = () => {
    const dispatch = useDispatch()
    // const allVideoGames = useSelector((state) => state.allVideoGames);

    useEffect(() => {
        dispatch(getAllVideoGames());
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <SearchBar />
            <CardsContainer />
        </div>
    )
};

export default Home;