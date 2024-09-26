const db = require("../models");
const Login = db.logins;
const Curso = db.cursos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.user) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a login
    const login = {
        user: req.body.user,
        email: req.body.email,
        active: req.body.active ? req.body.active : false
    };

    // Save Tutorial in the database
    Login.create(login)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Login."
            });
        });
};
exports.findAll = (req, res) => {
    const user = req.query.user;
    var condition = user ? { user: { [Op.like]: `%${user}%` } } : null;

    Login.findAll({
        include: ["cursos", "tags"],
    }, { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving cursos."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Login.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Login with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Login with id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Login.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Login was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Login with id=${id}. Maybe Login was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Login with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Login.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Login was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Login with id=${id}. Maybe Login was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Login with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Login.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Login were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Login."
            });
        });
};
exports.findAllCurso= (req, res) => {
    Curso.findAll({ where: { name: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving login."
            });
        });
};

exports.createCurso = (req, res) => {
    const loginId = req.params.id;
    const cursos = {
        name: req.body.name,
        costo: req.body.costo
    };
    Curso.create({
        name: cursos.name,
        loginIdId: loginId,
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the login."
            });
        });
};