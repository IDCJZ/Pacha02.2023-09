const Sequelize     = require('sequelize');
const juego         = require('../models').juego;
module.exports = {
    create( req, res) {
        console.log(req.body);
         return juego
              .create ({
                    name: req.body.name,
                    description: req.body.description,
                    status: req.body.status
              })
              .then(juego => res.status(200).send(juego))
              .catch(error => res.status(400).send(error))
    },

    list(_, res) {
         return juego.findAll({})
              .then(juego => res.status(200).send(juego))
              .catch(error => res.status(400).send(error))
    },

    find (req, res) {
         return juego.findAll({
               where: {
                     name: req.body.name,
               }
         })
         .then(juego => res.status(200).send(juego))
         .catch(error => res.status(400).send(error))
   },
};