const db = require("../models");
const Pago = db.pagos;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    // Validate request
    if (!req.body.cast) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a login
    const pagos = {
        cast: req.body.cast,
    };

    // Save  in the database
    Pago.create(pagos)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the pago."
            });
        });
};
exports.findAll = (req, res) => {
    const cast = req.query.cast;
    var condition = cast ? { cast: { [Op.like]: `%${cast}%` } } : null;

    Pago.findAll({
        include: ["pagos", "tags"],
    }, { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving pagos."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Pago.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Pago with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Pago with id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Pago.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pago was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Pago with id=${id}. Maybe Pago was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pago with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Pago.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pago was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Pago with id=${id}. Maybe Pago was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Pago with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Pago.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Pago were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Pago."
            });
        });
};