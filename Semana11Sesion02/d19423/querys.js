const connection = require("./db");

const getAllEspecies = async () =>{
    const [query] = await connection.execute('call sp_crud_especie(?,?,?,?,?);',[1,null,null,null,null]);
    return query;
}
const getEspecieById = async(id)=>{
    const [query] = await connection.execute('call sp_crud_especie(?,?,?,?,?);',[5,null,null,id,null]);
    return query;
}
// const getAllActorsByFilter = async (filter) =>{
//     console.log(filter);
//     const filtro = filter.filter;

//     const porPagina = filter._ipg;
//     const desdePagina = filter._pgn;
//     if(filtro=='all'){
//         const [query] = await connection.execute(`select * from actor LIMIT ${desdePagina}, ${ porPagina};`);
//         return query;
//     }
//     else{
//         const [query] = await connection.execute(`select * from actor where first_name like '%${filtro}%' or last_name like '%${filtro}%' LIMIT ${desdePagina}, ${ porPagina};`);
//         return query;
//     }
// }

// const getActorById = async (id) =>{
//     const [query] = await connection.execute('select * from actor where actor_id = ?',[id])
//     return query;
// }

const createEspecie = async(descripcion, usuario) =>{
    const [query] = await connection.execute(`call sp_crud_especie(?,?,?,?,?);`, [2,descripcion,null,null,usuario]);
    
    return query;
}

const updateEspecie = async(id, descripcion, usuario)=>{

    const item = await getEspecieById(id)
    if(item.length === 0){
        return null;
    }
    const [query] = await connection.execute(`call sp_crud_especie(?,?,?,?,?);`, [3,descripcion,null,id,usuario]);
    return query;
}

const deleteEspecie = async(id, usuario)=>{
    const item = await getEspecieById(id)
    if(item.length === 0){
        return null;
    }
    const [query] = await connection.execute(`call sp_crud_especie(?,?,?,?,?);`, [4,null,null,id,usuario]);
    return query;
}


module.exports = {
    getAllEspecies,
    getEspecieById,
    createEspecie,
    updateEspecie,
    deleteEspecie
}