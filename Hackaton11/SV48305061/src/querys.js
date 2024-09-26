const connection=require('./connection');


//ESPECIE
//GET   
const getAllEspecies= async ()=>{
    const [query]= await connection.execute('select * from veterinaria.especie');
    return query;
};

//GET ID
const getEspecieId=async (id)=>{
    const [query]= await connection.execute(`select * from veterinaria.especie where id = ?`,[id]);
    return query;
};    
//POST
const createEspecie=async(descripcion,activo,usuariocreacion)=>{
const [query]=await connection.execute('insert into veterinaria.especie(descripcion,activo,usuariocreacion) values (?,?,?)',[descripcion,activo,usuariocreacion]);
const item=await getEspecieId(query.insertId);
return item;
};
//PUT
const updateEspecie=async(id,descripcion,activo,usuariocreacion)=>{
    const item=await getEspecieId(id);
    if(item.length===0){
        return null;
    }
    const [query]=await connection.execute('update veterinaria.especie set descripcion= ?,activo= ?,usuariocreacion= ? where id= ?;',[descripcion,activo,usuariocreacion,id]);
    return query;
};
//DELETE

//BCKUBIGEO
//GET
const getAllBckubigeo= async ()=>{
    const [query]= await connection.execute('select * from veterinaria.bckubigeo')
    return query;
};
//GET ID
const getBckubigeoId=async (ubigeo)=>{
    const [query]= await connection.execute(`select * from veterinaria.bckubigeo where ubigeo = ?`,[ubigeo]);
    return query;
}; 
//POST
const createBckubigeo=async(ubigeo,ubicacion,activo,usuariocreacion)=>{
    const [query]=await connection.execute('insert into veterinaria.bckubigeo(ubigeo,ubicacion,activo,usuariocreacion) values (?,?,?,?)',[ubigeo,ubicacion,activo,usuariocreacion]);
    const item=await getBckubigeoId(query.insertId);
    return item;
    };
//PUT
const updateBckubigeo=async(ubigeo,ubicacion,activo,usuariocreacion)=>{
    const item=await getBckubigeoId(ubigeo);
    if(item.length===0){
        return null;
    }
    const [query]=await connection.execute('update veterinaria.Bckubigeo set ubicacion= ?,activo= ?,usuariocreacion=? where ubigeo= ?;',[ubicacion,activo,usuariocreacion,ubigeo]);
    return query;
};
//DELETE

//MASCOTAS
//GET
const getAllMascotas= async()=>{
    const [query]= await connection.execute('select * from veterinaria.mascota')
    return query;
};
//GET ID
const getMascotasId=async (id)=>{
    const [query]= await connection.execute(`select * from veterinaria.mascota where id = ?`,[id]);
    return query;
}; 
//POST
const createMascotas=async(nombre,fechanacimiento,idespecie,idraza,idsexo,idpropietario,activo,usuariocreacion)=>{
    const [query]=await connection.execute('insert into veterinaria.mascota(nombre,fechanacimiento,idespecie,idraza,idsexo,idpropietario,activo,usuariocreacion) values (?,?,?,?,?,?,?,?)',[nombre,fechanacimiento,idespecie,idraza,idsexo,idpropietario,activo,usuariocreacion]);
    const item=await getMascotasId(query.insertId);
    return item;
    };
//PUT
const updateMascotas=async(id,nombre,fechanacimiento,idespecie,idraza,idsexo,idpropietario,activo,usuariocreacion)=>{
    const item=await getMascotasId(id);
    if(item.length===0){
        return null;
    }
    const [query]=await connection.execute('update veterinaria.mascota set nombre=?,fechanacimiento=?,idespecie=?,idraza=?,idsexo=?,idpropietario=?,activo=?,usuariocreacion=? where id= ?;',[nombre,fechanacimiento,idespecie,idraza,idsexo,idpropietario,activo,usuariocreacion,id]);
    return query;
};

//NACIONALIDAD
const getAllNacionalidad=async()=>{
    const [query]= await connection.execute('select * from veterinaria.nacionalidad') 
    return query;
};
//GET ID
const getNacionalidadId=async (id)=>{
    const [query]= await connection.execute(`select * from veterinaria.nacionalidad where id = ?`,[id]);
    return query;
}; 
//POST
const createNacionalidad=async(descripcion,activo,usuariocreacion)=>{
    const [query]=await connection.execute('insert into veterinaria.nacionalidad(descripcion,activo,usuariocreacion) values (?,?,?)',[descripcion,activo,usuariocreacion]);
    const item=await getNacionalidadId(query.insertId);
    return item;
    };
//PUT
const updateNacionalidad=async(id,descripcion,activo,usuariocreacion)=>{
    const item=await getNacionalidadId(id);
    if(item.length===0){
        return null;
    }
    const [query]=await connection.execute('update veterinaria.nacionalidad set descripcion= ?,activo= ?,usuariocreacion= ? where id= ?;',[descripcion,activo,usuariocreacion,id]);
    return query;
};
//PROPIETARIOS
//GET
const getAllPropietario=async()=>{
    const [query]= await connection.execute('select * from veterinaria.propietario');
    return query;
};
//GET ID
const getPropietarioId=async (id)=>{
    const [query]= await connection.execute(`select * from veterinaria.propietario where id = ?`,[id]);
    return query;
}; 
//POST
const createPropietario=async(Nombre,apellido,direccion,telefono,idnacionalidad,ubigeo,activo,usuariocreacion)=>{
    const [query]=await connection.execute('insert into veterinaria.Propietario(Nombre,apellido,direccion,telefono,idnacionalidad,ubigeo,activo,usuariocreacion) values (?,?,?,?,?,?,?,?)',[Nombre,apellido,direccion,telefono,idnacionalidad,ubigeo,activo,usuariocreacion]);
    const item=await getPropietarioId(query.insertId);
    return item;
    };
//PUT
const updatePropietario=async(id,Nombre,apellido,direccion,telefono,idnacionalidad,ubigeo,activo,usuariocreacion)=>{
    const item=await getPropietarioId(id);
    if(item.length===0){
        return null;
    }
    const [query]=await connection.execute('update veterinaria.Propietario set Nombre=?,apellido=?,direccion=?,telefono=?,idnacionalidad=?,ubigeo=?,activo=?,usuariocreacion=? where id= ?;',[Nombre,apellido,direccion,telefono,idnacionalidad,ubigeo,activo,usuariocreacion,id]);
    return query;
};
//RAZA
//GET ALL
const  getAllRaza=async()=>{
    const [query]=await connection.execute('select * from veterinaria.raza')
    return query;
};
//GET ID
const getRazaId=async (id)=>{
    const [query]= await connection.execute(`select * from veterinaria.raza where id = ?`,[id]);
    return query;
};    
//POST
const createRaza=async(descripcion,activo,usuariocreacion)=>{
const [query]=await connection.execute('insert into veterinaria.raza(descripcion,activo,usuariocreacion) values (?,?,?)',[descripcion,activo,usuariocreacion]);
const item=await getRazaId(query.insertId);
return item;
};
//PUT
const updateRaza=async(id,descripcion,activo,usuariocreacion)=>{
    const item=await getRazaId(id);
    if(item.length===0){
        return null;
    }
    const [query]=await connection.execute('update veterinaria.raza set descripcion= ?,activo= ?,usuariocreacion= ? where id= ?;',[descripcion,activo,usuariocreacion,id]);
    return query;
};

//SEXO
//GET ALL
const getAllSexo=async()=>{
    const [query]= await connection.execute('select * from veterinaria.sexo')
    return query;
};
//GET ID
const getSexoId=async (id)=>{
    const [query]= await connection.execute(`select * from veterinaria.sexo where id = ?`,[id]);
    return query;
};    
//POST
const createSexo=async(descripcion,activo,usuariocreacion)=>{
const [query]=await connection.execute('insert into veterinaria.sexo(descripcion,activo,usuariocreacion) values (?,?,?)',[descripcion,activo,usuariocreacion]);
const item=await getSexoId(query.insertId);
return item;
};
//PUT
const updateSexo=async(id,descripcion,activo,usuariocreacion)=>{
    const item=await getSexoId(id);
    if(item.length===0){
        return null;
    }
    const [query]=await connection.execute('update veterinaria.sexo set descripcion= ?,activo= ?,usuariocreacion= ? where id= ?;',[descripcion,activo,usuariocreacion,id]);
    return query;
};
//UBIGEO
//GET ALL
const getAllUbigeo=async()=>{
    const [query]= await connection.execute('select * from veterinaria.ubigeo')
    return query;
};
//GET ID
const getUbigeoId=async (ubigeo)=>{
    const [query]= await connection.execute(`select * from veterinaria.ubigeo where ubigeo = ?`,[ubigeo]);
    return query;
}; 
//POST
const createUbigeo=async(ubigeo,ubicacion,activo,usuariocreacion)=>{
    const [query]=await connection.execute('insert into veterinaria.ubigeo(ubigeo,ubicacion,activo,usuariocreacion) values (?,?,?,?)',[ubigeo,ubicacion,activo,usuariocreacion]);
    const item=await getUbigeoId(query.insertId);
    return item;
    };
//PUT
const updateUbigeo=async(ubigeo,ubicacion,activo,usuariocreacion)=>{
    const item=await getUbigeoId(ubigeo);
    if(item.length===0){
        return null;
    }
    const [query]=await connection.execute('update veterinaria.ubigeo set ubicacion= ?,activo= ?,usuariocreacion=? where ubigeo= ?;',[ubicacion,activo,usuariocreacion,ubigeo]);
    return query;
};

//USUARIO
//GET ALL
const getAllUsuario=async()=>{
    const [query]=await connection.execute('select * from veterinaria.usuario')
    return query;
};
//GET ID
const getUsuarioId=async (id)=>{
    const [query]= await connection.execute(`select * from veterinaria.usuario where id = ?`,[id]);
    return query;
};    
//POST
const createUsuario=async(username,email,nombre,apellido,estadocivil,fechanacimineto,edad,activo,usuariocreacion)=>{
const [query]=await connection.execute('insert into veterinaria.usuario(username,email,nombre,apellido,estadocivil,fechanacimineto,edad,activo,usuariocreacion) values (?,?,?,?,?,?,?,?,?)',[username,email,nombre,apellido,estadocivil,fechanacimineto,edad,activo,usuariocreacion]);
const item=await getUsuarioId(query.insertId);
return item;
};
//PUT
const updateUsuario=async(id,username,email,nombre,apellido,estadocivil,fechanacimineto,edad,activo,usuariocreacion)=>{
    const item=await getEspecieId(id);
    if(item.length===0){
        return null;
    }
    const [query]=await connection.execute('update veterinaria.usuario set username=?,email=?,nombre=?,apellido=?,estadocivil=?,fechanacimineto=?,edad=?,activo=?,usuariocreacion=? where id=?;',[username,email,nombre,apellido,estadocivil,fechanacimineto,edad,activo,usuariocreacion,id]);
    return query;
};

//USUARIO_LOG
//GET ALL
const getAllUsuarioLog=async()=>{
    const [query]=await connection.execute('select * from veterinaria.usuario_log')
    return query;
};
//GET ID
const getUsuarioLogId=async (id)=>{
    const [query]= await connection.execute(`select * from veterinaria.usuario_log where id = ?`,[id]);
    return query;
};    
//POST
const createUsuarioLog=async(username,email,nombre,apellido,estadocivil,fechanacimineto,edad,activo,usuariocreacion)=>{
const [query]=await connection.execute('insert into veterinaria.usuario_log(username,email,nombre,apellido,estadocivil,fechanacimineto,edad,activo,usuariocreacion) values (?,?,?,?,?,?,?,?,?)',[username,email,nombre,apellido,estadocivil,fechanacimineto,edad,activo,usuariocreacion]);
const item=await getUsuarioLogId(query.insertId);
return item;
};
//PUT
const updateUsuarioLog=async(id,username,email,nombre,apellido,estadocivil,fechanacimineto,edad,activo,usuariocreacion)=>{
    const item=await getUsuarioLogId(id);
    if(item.length===0){
        return null;
    }
    const [query]=await connection.execute('update veterinaria.usuario_log set username=?,email=?,nombre=?,apellido=?,estadocivil=?,fechanacimineto=?,edad=?,activo=?,usuariocreacion=? where id=?;',[username,email,nombre,apellido,estadocivil,fechanacimineto,edad,activo,usuariocreacion,id]);
    return query;
};

//VACUNAS
//GET ALL
const getAllVacunas=async()=>{
    const [query]=await connection.execute('select * from veterinaria.vacunas')
    return query;
};
//GET ID
const getVacunasId=async (id)=>{
    const [query]= await connection.execute(`select * from veterinaria.vacunas where id = ?`,[id]);
    return query;
};    
//POST
const createVacunas=async(descripcion,activo,usuariocreacion)=>{
const [query]=await connection.execute('insert into veterinaria.vacunas(descripcion,activo,usuariocreacion) values (?,?,?)',[descripcion,activo,usuariocreacion]);
const item=await getVacunasId(query.insertId);
return item;
};
//PUT
const updateVacunas=async(id,descripcion,activo,usuariocreacion)=>{
    const item=await getVacunasId(id);
    if(item.length===0){
        return null;
    }
    const [query]=await connection.execute('update veterinaria.vacunas set descripcion= ?,activo= ?,usuariocreacion= ? where id= ?;',[descripcion,activo,usuariocreacion,id]);
    return query;
};

module.exports={
    getAllBckubigeo,
    getBckubigeoId,
    createBckubigeo,
    updateBckubigeo,

    getAllMascotas,
    createMascotas,
    getMascotasId,
    updateMascotas,

    getAllNacionalidad,
    getNacionalidadId,
    createNacionalidad,
    updateNacionalidad,

    getAllPropietario,
    getPropietarioId,
    createPropietario,
    updatePropietario,

    getAllRaza,
    getRazaId,
    createRaza,
    updateRaza,

    getAllSexo,
    getSexoId,
    createSexo,
    updateSexo,

    getAllUbigeo,
    getUbigeoId,
    createUbigeo,
    updateUbigeo,

    getAllUsuario,
    getUsuarioId,
    createUsuario,
    updateUsuario,

    getAllUsuarioLog,
    getUsuarioLogId,
    createUsuarioLog,
    updateUsuarioLog,

    getAllVacunas,
    getVacunasId,
    createVacunas,
    updateVacunas,

    getAllEspecies,
    getEspecieId,
    createEspecie,
    updateEspecie
};

