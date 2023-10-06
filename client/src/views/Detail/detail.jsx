import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { clearDetail, getDetailVideoGame } from "../../redux/Actions/actions";

const Detail = () => {
    const { id } = useParams();
    const detail = useSelector((state) => state.detail);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getDetailVideoGame(id));
        return () => {
            dispatch(clearDetail());
        };
    }, [id]);

    return (
        <div>
            <h1>Detail</h1>
            <div>
                <h1>Id: {detail.id}</h1>
                <p>Name: {detail.name}</p>
                <p>Platforms: {detail.platforms}</p>
                <p>Genres: {detail.genres}</p>
                <p>Description: {detail.description}</p>
                <img src={detail.image} alt={detail.name} />
                <p>Released: {detail.released}</p>
                <p>Rating: {detail.rating}</p>
            </div>
        </div>
    )
};

export default Detail;