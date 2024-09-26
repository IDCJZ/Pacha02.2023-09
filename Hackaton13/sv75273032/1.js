const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Simulación de base de datos
const database = {
  courses: [],
  orders: [],
  coupons: [],
};

// Middleware
app.use(bodyParser.json());

// Rutas
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const couponRoutes = require('./routes/couponRoutes');

app.use('/login', authRoutes);
app.use('/courses', courseRoutes);
app.use('/orders', orderRoutes);
app.use('/process_payment', paymentRoutes);
app.use('/coupons', couponRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
