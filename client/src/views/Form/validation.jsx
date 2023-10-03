const Validation = (input) => {
    let errors = {};
    let platformsRegex = /^[A-Za-z0-9]+(?:, [A-Za-z0-9]+)*$/;

    if (!input.name) {
        errors.name = "Enter name";
    }
    if (input.name.length >= 40) {
        errors.name = "No more than 40 characters please";
    }
    if (!input.description) {
        errors.description = "Enter description please";
    }
    if (!input.platforms) {
        errors.platforms = "You must write at least one platform";
    }
    if (!platformsRegex.test(input.platforms)) {
        errors.platforms = "The name must not have spaces and each platform must be separated by a comma.";
    }
    if (!input.genres.length === 0) {
        errors.genres = "Select at least one genre";
    }
    if (!input.image) {
        errors.image = "Upload an image";
    }
    if (!input.genres.length) {
        errors.genres = "Select at least one genre";
    }
    if (!input.released) {
        errors.released = "Enter a release date";
    }
    if (!input.rating) {
        errors.rating = "Enter a rating";
    }
    return errors;
}

export default Validation;