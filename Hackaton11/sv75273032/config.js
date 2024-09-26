// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mascotas from './Mascotas';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/mascotas/:id" component={Mascotas} />
        {/* Otras rutas para agregar, actualizar y eliminar mascotas */}
      </Switch>
    </Router>
  );
};

export default App;
