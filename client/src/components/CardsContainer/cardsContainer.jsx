import { useSelector } from "react-redux";
import Card from "../Card/card";
import style from "./CardsContainer.module.css"

const CardsContainer = () => {
    const videoGames = useSelector((state) => state.videoGames);
    return (
        <div className={style.CardsContainer}>
            {videoGames.map((game) => (
                <Card
                    id={game.id}
                    key={game.id}
                    name={game.name}
                    platforms={game.platforms}
                    genres={game.genres}
                    image={game.image}
                    released={game.released}
                    rating={game.rating}
                />
            ))}
        </div>
    )
};

export default CardsContainer;