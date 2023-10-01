const cleanArray = (arr) =>
    arr.map((data) => {
        return {
            id: data.id,
            name: data.name,
            description: data.description_raw,
            platforms: data.platforms.map(platform => platform.platform.name).join(', '),
            genres: data.genres.map(genres => genres.name),
            image: data.background_image,
            released: data.released,
            rating: data.rating,
            created: false
        }
    });

module.exports = cleanArray;