import { useSelector } from "react-redux";
import Card from "../Card/card";

const CardsContainer = () => {
    const videoGames = useSelector((state) => state.videoGames);
    return (
        <div>
            {videoGames.map((game) => {
                return (
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
                )
            })}
        </div>
    )
};

export default CardsContainer;