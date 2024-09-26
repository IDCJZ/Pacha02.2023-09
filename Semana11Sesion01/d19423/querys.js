const connection = require("./db");

const getAllActors = async () =>{
    const [query] = await connection.execute('Select * from Actor;');
    return query;
}

const getAllActorsByFilter = async (filter) =>{
    console.log(filter);
    const filtro = filter.filter;

    const porPagina = filter._ipg;
    const desdePagina = filter._pgn;
    if(filtro=='all'){
        const [query] = await connection.execute(`select * from actor LIMIT ${desdePagina}, ${ porPagina};`);
        return query;
    }
    else{
        const [query] = await connection.execute(`select * from actor where first_name like '%${filtro}%' or last_name like '%${filtro}%' LIMIT ${desdePagina}, ${ porPagina};`);
        return query;
    }
}

const getActorById = async (id) =>{
    const [query] = await connection.execute('select * from actor where actor_id = ?',[id])
    return query;
}

const createActor = async(first_name, last_name) =>{
    const [query] = await connection.execute(`insert into Actor(first_name, last_name) values(?,?)`, [first_name,last_name]);
    const item = await getActorById(query.insertId)
    return item;
}

const updateActor = async(id, first_name, last_name)=>{

    const item = await getActorById(id)
    if(item.length === 0){
        return null;
    }
    const [query] = await connection.execute(`update  Actor set first_name = ?, last_name = ? where actor_id = ?`, [first_name,last_name,id]);
    return query;
}

const deleteActor = async(id)=>{
    const item = await getActorById(id)
    if(item.length === 0){
        return null;
    }
    const [query] = await connection.execute(`delete from  Actor  where actor_id = ?`, [id]);
    return query;
}


module.exports = {
    getAllActors, 
    getActorById, 
    getAllActorsByFilter,
    createActor,
    updateActor,
    deleteActor
}