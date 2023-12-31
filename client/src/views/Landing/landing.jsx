import { Link } from "react-router-dom";
import style from "./landing.module.css";
import video from "../../assets/video/03.mp4"

const Landing = () => {
    return (
        <div className={style.landing}>
            <video
                className={style.video}
                src={video}
                autoPlay
                muted
                loop>
            </video>
            <h1>VIDEOGAMES</h1>
            <Link to="/home">
                <button
                    className={style.button}>
                    <span>HO</span><span>ME</span>
                </button>
            </Link>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');
            </style>
        </div>
    )
};

export default Landing;