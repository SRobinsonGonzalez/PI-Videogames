const cleanArrayGenres = (arr) =>
    arr.map((data) => {
        return {
            id: data.id,
            name: data.name
        }
    });

module.exports = cleanArrayGenres;