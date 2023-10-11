import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllGenres } from "../../redux/Actions/actions";
import Validation from "./validation";
import axios from "axios";
import style from "./form.module.css"
import video from "../../assets/video/06.mp4"

const Form = () => {
    const genres = useSelector((state) => state.genres);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllGenres())
    }, []);

    const [form, setForm] = useState({
        name: "",
        description: "",
        platforms: "",
        genres: [],
        image: "",
        released: "",
        rating: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        platforms: "",
        genres: [],
        image: "",
        released: "",
        rating: "",
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        if (property === "genres") {
            const genreName = event.target.value;
            if (!form.genres.includes(genreName)) {
                setForm({
                    ...form,
                    genres: [...form.genres, genreName]
                });
            };
            return;
        } else {
            setForm({
                ...form,
                [property]: value
            });
        };
        setErrors(
            Validation({
                ...form,
                [property]: value
            })
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationForm = Validation(form);
        setErrors(validationForm);
        const hasErrors = Object.values(validationForm).some((error) => !!error);

        if (!hasErrors) {
            axios.post('http://localhost:3001/videogames', form)
                .then((response) => alert('Successfully created'))
                .catch((error) => alert("Error creating video game"));
        } else {
            alert('There are errors in the form. Cannot submit')
        }
    };

    return (
        <div className={style.form}>
            <video
                className={style.video}
                src={video}
                autoPlay
                muted
                loop>
            </video>
            <div className={style.box}>
                <div className={style.formContainer}>
                    <h2>Videogame Registration</h2>
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                        <hr />
                        <div>
                            <label>Name:
                                <input
                                    value={form.name}
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    onChange={changeHandler}
                                    style={{ borderColor: errors.name ? 'red' : 'initial' }}>
                                </input>
                                {errors.name && <p>{errors.name}</p>}
                            </label>
                        </div>

                        <div>
                            <label>Platforms:
                                <input
                                    value={form.platforms}
                                    type="text"
                                    name="platforms"
                                    onChange={changeHandler}
                                    style={{
                                        borderColor: errors.platforms
                                            ? 'red'
                                            : 'initial'
                                    }}>
                                </input>
                                {errors.platforms && <p>{errors.platforms}</p>}
                            </label>
                        </div>

                        <div>
                            <label>Genres:
                                <select
                                    value={form.genres}
                                    name="genres"
                                    // multiple
                                    onChange={changeHandler}>
                                    <option>⬇</option>
                                    {genres.map((genre) => (
                                        <option
                                            // type="input"
                                            key={genre.id}
                                            value={genre.name}>
                                            {genre.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.genres && <p>{errors.genres}</p>}
                            </label>
                        </div>

                        <div>
                            <label>Rating:
                                <input
                                    value={form.rating}
                                    type="number"
                                    name="rating"
                                    step="0.1"
                                    onChange={changeHandler}>
                                </input>
                                {errors.rating && <p>{errors.rating}</p>}
                            </label>
                        </div>

                        <div>
                            <label>Image:
                                <input
                                    value={form.image}
                                    type="text"
                                    name="image"
                                    placeholder="Enter Image URL"
                                    onChange={changeHandler}
                                />
                                {errors.image && <p>{errors.image}</p>}
                            </label>
                        </div>

                        <hr />

                        <div>
                            <label>Released:
                                <input
                                    value={form.released}
                                    type="date"
                                    name="released"
                                    autoComplete="off"
                                    onChange={changeHandler}>
                                </input>
                                {errors.released && <p>{errors.released}</p>}
                            </label>
                        </div>

                        <div>
                            <label>Description:
                                <textarea
                                    value={form.description}
                                    name="description"
                                    rows="4"
                                    onChange={changeHandler}>
                                </textarea>
                                {errors.description && <p>{errors.description}</p>}
                            </label>
                        </div>

                        <button className={style.submit} type="submit">Register</button>
                    </form>
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');
            </style>
        </div>
    )
};

export default Form;