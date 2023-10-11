import CardsContainer from "../../components/CardsContainer/cardsContainer";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getAllVideoGames, paginateGames } from "../../redux/Actions/actions";
import style from "./home.module.css";

const Home = () => {
    const dispatch = useDispatch()

    const paginate = (event) => {
        dispatch(paginateGames(event.target.name));
    }

    useEffect(() => {
        dispatch(getAllVideoGames());
    }, []);

    return (
        <div className={style.home}>
            <div className={style.buttons}>
                <button
                    name="prev"
                    onClick={paginate}>Prev
                </button>
                <button
                    name="next"
                    onClick={paginate}>Next
                </button>
            </div>

            <div className={style.cardsContainer}>
                <CardsContainer />
            </div>

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');
            </style>
        </div>
    )
};

export default Home;