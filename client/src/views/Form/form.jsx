import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllGenres } from "../../redux/Actions/actions";
import Validation from "./validation";

const Form = ({ createVideoGameController }) => {
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
            createVideoGameController(form);
        } else {
            alert('There are errors in the form. Cannot submit')
        }
    };

    return (
        <div>
            <h1>New Video Game Registration</h1>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
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

                <div>
                    <label>Platforms:
                        <input
                            value={form.platforms}
                            type="text"
                            name="platforms"
                            onChange={changeHandler}
                            style={{ borderColor: errors.platforms ? 'red' : 'initial' }}>
                        </input>
                        {errors.platforms && <p>{errors.platforms}</p>}
                    </label>
                </div>

                <div>
                    <label>Genres:
                        <select
                            value={form.genres}
                            name="genres"
                            multiple
                            onChange={changeHandler}>
                            {genres.map((genre) => (
                                <option
                                    type="checkbox"
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
                    <label>Image:
                        <input
                            value={form.image}
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={changeHandler}
                        />
                        {errors.image && <p>{errors.image}</p>}
                    </label>
                </div>

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
                    <label>Rating:
                        <input
                            value={form.rating}
                            type="number"
                            name="rating"
                            min="1"
                            max="5"
                            step="0.1"
                            onChange={changeHandler}>
                        </input>
                        {errors.rating && <p>{errors.rating}</p>}
                    </label>
                </div>

                <div>
                    <button type="submit">Register Video Game</button>
                </div>
            </form>
        </div>
    )
};

export default Form;

// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getAllGenres } from "../../redux/Actions/actions";

// const Form = () => {
//     const genres = useSelector((state) => state.genres);
//     const dispatch = useDispatch();
//     const [selectedGenres, setSelectedGenres] = useState([]); // Estado local para las opciones seleccionadas

//     useEffect(() => {
//         dispatch(getAllGenres());
//     }, []);

// Manejar el cambio de las opciones seleccionadas
//     const handleGenreChange = (event) => {
//         const genreName = event.target.value;
//         if (event.target.checked) {
// Agregar género a la lista si está marcado
//             setSelectedGenres([...selectedGenres, genreName]);
//         } else {
// Quitar género de la lista si está desmarcado
//             setSelectedGenres(selectedGenres.filter((genre) => genre !== genreName));
//         }
//     };

//     return (
//         <div>
//             <h1>New Video Game Registration</h1>
//             <form>
//                 {/* ... (otros campos de formulario) */}

//                 <div>
//                     <label>Genres:
//                         <div>
//                             {genres.map((genre) => (
//                                 <label key={genre.id}>
//                                     <input
//                                         type="checkbox"
//                                         name="genre"
//                                         value={genre.name}
//                                         checked={selectedGenres.includes(genre.name)}
//                                         onChange={handleGenreChange}
//                                     />
//                                     {genre.name}
//                                 </label>
//                             ))}
//                         </div>
//                     </label>
//                 </div>

//                 {/* ... (otros campos de formulario) */}
//             </form>

//             {/* Lista de géneros seleccionados */}
// {
//     selectedGenres.length > 0 && (
//         <div>
//             <h2>Selected Genres:</h2>
//             <ul>
//                 {selectedGenres.map((genre, index) => (
//                     <li key={index}>{genre}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// </div>
//     );
// };

// export default Form;

