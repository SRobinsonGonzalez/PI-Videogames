import { Link } from "react-router-dom";
import style from "./card.module.css"

const Card = ({ id, name, platforms, genres, image, rating }) => {

    return (
        <div className={style.cardContainer}>
            <div className={style.card}>
                <h2 className={style.nameBox}>
                    {name}
                </h2>
                <img src={image} alt={name} />
                <div className={style.info}>
                    <p>Genres: {genres.join(', ')}</p>
                    <p>Platforms: {platforms}</p>
                    <p>Rating: {rating}</p>
                    <Link to={`/detail/${id}`}>See more...</Link>
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');
            </style>
        </div>
    )
};

export default Card