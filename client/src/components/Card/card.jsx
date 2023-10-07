import { Link } from "react-router-dom";

const Card = ({ id, name, platforms, genres, image, rating }) => {
    
    return (
        <div>
            <Link to={`/detail/${id}`}>
                <p>Name: {name}</p>
            </Link>
            {/* <p>Platforms: {platforms}</p> */}
            <p>Genres: {genres.join(', ')}</p>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={name} />
            </Link>
            <p>Rating: {rating}</p>
        </div>
    )
};

export default Card;