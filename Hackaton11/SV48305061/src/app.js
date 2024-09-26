const  express= require('express');
const especie=require('./routes/especie');
const bckubigeo=require('./routes/bckubigeo');
const mascota=require('./routes/mascota');
const nacionalidad=require('./routes/nacionalidad');
const propietario=require('./routes/propietario');
const raza=require('./routes/raza');
const sexo=require('./routes/sexo');
const ubigeo=require('./routes/ubigeo');
const usuario=require('./routes/usuario');
const usuariolog=require('./routes/usuariolog');
const vacunas=require('./routes/vacunas');

const app = express();

app.use(express.json());

const PORT = 4040;

app.use('/especie',especie);
app.use('/bckubigeo',bckubigeo);
app.use('/mascota',mascota);
app.use('/nacionalidad',nacionalidad);
app.use('/propietario',propietario);
app.use('/raza', raza);
app.use('/sexo',sexo);
app.use('/ubigeo',ubigeo);
app.use('/usuario',usuario);
app.use('/usuariolog',usuariolog);
app.use('/vacunas',vacunas);

app.listen(PORT,()=>{
    console.log(`Servidor listo en el puerto ${PORT}` );
});

