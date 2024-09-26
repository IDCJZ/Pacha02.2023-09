const connection = require("./db");
const database = connection.db("sample_mflix");
const movies = database.collection("movies");

const getAllPeliculas = async () =>{
    const filtro = {};
        const options = {
            // Sort returned documents in ascending order by title (A->Z)
            sort: { title: 1 },
            // Include only the `title` and `imdb` fields in each returned document
            projection: { _id: 0, title: 1, imdb: 1 },
        };
        // Execute query
        const cursor =  movies.find(filtro,options);
        if ((await movies.countDocuments(filtro)) === 0) {
            return null;
        }
        let respuesta = [];
        for await (const doc of cursor) {
            respuesta.push(doc);
        }
       return respuesta;
}


//getAllPeliculasByTitulo

const getAllPeliculasByTitulo = async (titulo) =>{
    const filtro = {title:titulo};
        const options = {
            // Sort returned documents in ascending order by title (A->Z)
            sort: { title: 1 },
            // Include only the `title` and `imdb` fields in each returned document
            projection: { _id: 0, title: 1, imdb: 1 },
        };
        // Execute query
        const cursor =  movies.find(filtro,options);
        if ((await movies.countDocuments(filtro)) === 0) {
            return null;
        }
        let respuesta = [];
        for await (const doc of cursor) {
            respuesta.push(doc);
        }
       return respuesta;
}
//
const createPelicula = async (data) =>{
    const result = await movies.insertOne(data);
    return result.insertedId
}
module.exports = {
    getAllPeliculas,
    getAllPeliculasByTitulo,
    createPelicula
}
