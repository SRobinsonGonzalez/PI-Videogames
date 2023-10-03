import { Link } from "react-router-dom";

const Card = ({ id, name, platforms, genres, image, released, rating }) => {
    
    return (
        <div>
            <p>Id: {id}</p>
            <Link to={`/detail/${id}`}>
                <p>Name: {name}</p>
            </Link>
            <p>Platforms: {platforms}</p>
            <p>Genres: {genres}</p>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={name} />
            </Link>
            <p>Released: {released}</p>
            <p>Rating: {rating}</p>
        </div>
    )
};

export default Card;