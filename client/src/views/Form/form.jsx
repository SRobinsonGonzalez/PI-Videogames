import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllGenres } from "../../redux/Actions/actions";

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

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.type === "file" ? event.target.files[0] : event.target.value;

        if (property === "genres") {
            const genreName = event.target.value;
            if (!form.genres.includes(genreName)) {
                setForm({ ...form, genres: [...form.genres, genreName] });
            }
        } else {
            setForm({ ...form, [property]: value });
        }
    };

    return (
        <div>
            <h1>New Video Game Registration</h1>
            <form>
                <div>
                    <label>Name:
                        <input
                            value={form.name}
                            type="text"
                            name="name"
                            autoComplete="name"
                            onChange={changeHandler}>
                        </input>
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
                    </label>
                </div>

                <div>
                    <label>Platforms:
                        <input
                            value={form.platforms}
                            type="text"
                            name="platforms"
                            onChange={changeHandler}>
                        </input>
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
                    </label>
                </div>

                <div>
                    <label>Image:
                        <input
                            value={form.image}
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={changeHandler}>
                        </input>
                        {form.image && (
                            <div>
                                <label>
                                    <img src={URL.createObjectURL(form.image)} alt="Selected" />
                                </label>
                            </div>
                        )}
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

