const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
require('dotenv').config()
const { join } = require('node:path');
const registroRoutes = require('./src/routes/registros.routes');
const comprasRoutes = require('./src/routes/compras.routes');
const ProductoRoutes = require('./src/routes/productos.routes');
const Compra =require('./src/models/compras.models')
const Usuarios =require('./src/models/usuarios.models')
const productos =require('./src/models/productos.models')
const { env } = require('node:process');
const stripe = require('stripe')(`${process.env.ClavesecretaStripe}`);

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/src/public'));

app.use(session({
  secret: `${process.env.secretkeyssesion}`,
  resave: true,
  saveUninitialized: true
}));

// Middleware para obtener el cuerpo sin procesar
app.use((req, res, next) => {
  console.log('Redireccionando a:', req.path);
  next();
});

// Middleware para validar el token del cliente
// Ruta para procesar el pago
app.post('/procesar-pago', async (req, res) => {
  const { payment_method_id, product_id, total } = req.body;
  const email = req.session.email;
  const { nombre } = req.body;

  const customer = await stripe.customers.create({
    email: email,
    name: nombre,
  });

  const customerId = customer.id;

  if (typeof total !== 'number' || isNaN(total)) {
    console.error('Error: El valor total no es un número válido');
    return res.json({ success: false, error: 'Error en el monto total' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100,
      currency: 'usd',
      payment_method: payment_method_id,
      customer: customerId,
      description: 'Compra en la tienda en línea',
      receipt_email: email,
      shipping: {
        name: nombre,
      },
    });

    // Guarda la información de la compra en la base de datos usando Sequelize
    const productoIds = product_id;

    const compras = productoIds.map(productoId => {
      return Compra.create({
        idemail: email,
        producto_id: productoId
      });
    });

    // Ejecuta todas las inserciones de manera simultánea usando Promise.all
    await Promise.all(compras);

    // Enviar el client_secret al cliente
    res.json({ success: true, clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error al crear el PaymentIntent:', error);
    res.json({ success: false, error: error.message, detailedError: error });
  }
});

// Ruta para confirmar el pago
app.post('/confirmar-pago', async (req, res) => {
  const { paymentIntentId } = req.body;

  try {
    const confirmedPaymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);

    res.json({ success: true, paymentIntent: confirmedPaymentIntent });
  } catch (error) {
    console.error('Error al confirmar el PaymentIntent:', error);
    res.json({ success: false, error: error.message, detailedError: error });
  }
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/public/main.html');
});

app.get('/registro', (req, res) => {
  res.sendFile(__dirname + '/src/public/registro.html');
});

app.get('/productos', async (req, res) => {
  try {
    const allProducts = await productos.findAll();
    res.json(allProducts);
  } catch (error) {
    console.error('Error al obtener todos los productos:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Configuración de Login
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/src/public/login.html');
});

// Proceso de Inicio de Sesión
// Función para realizar la consulta de inicio de sesión
async function performLoginQuery(email, password) {
  try {
    const user = await Usuarios.findOne({ where: { idemail: email } });
    return user;
  } catch (error) {
    throw error;
  }
}

// Proceso de Inicio de Sesión
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const user = await performLoginQuery(email, password);

      if (user) {
        const hashedPassword = user.passwordhash; // Obtener el hash almacenado
        const match = await bcrypt.compare(password, hashedPassword);

        if (match) {
          req.session.loggedin = true;
          req.session.email = email;
          console.log(`Inicio de sesión exitoso para: ${email}`);
          res.redirect('/home');
        } else {
          console.log(`Contraseña incorrecta para: ${email}`);
          res.send('Credenciales incorrectas');
        }
      } else {
        console.log(`Usuario no encontrado: ${email}`);
        res.send('Credenciales incorrectas o usuario no encontrado');
      }
    } catch (error) {
      console.error('Error al realizar la consulta de inicio de sesión:', error);
      res.status(500).send('Error interno del servidor');
    }
  } else {
    console.log('Ingresa usuario y contraseña');
    res.send('Ingresa usuario y contraseña');
  }
});

// Página Principal después del Inicio de Sesión
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/src/public/home.html');
});

// Rutas para Registro y Producto

app.use('/productos', ProductoRoutes);
app.use('/registros', registroRoutes);
app.use('/compras', comprasRoutes);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Conexión en el puerto ${PORT}`);
});