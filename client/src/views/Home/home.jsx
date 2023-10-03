import CardsContainer from "../../components/CardsContainer/cardsContainer";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getAllVideoGames } from "../../redux/Actions/actions";

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllVideoGames());
    },[]);

    return (
        <div>
            <h1>Home</h1>
            <CardsContainer />
        </div>
    )
};

export default Home;