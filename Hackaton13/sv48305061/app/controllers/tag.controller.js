const db = require("../models");
const Login = db.logins;
const Tag = db.tag;
const Pagos=db.pagos;


/*
req, res)=>{
    const tutorialId = req.params.id;
    const comment = {
        name: req.body.name,
        text: req.body.text
      };
*/
exports.create = (req, res) => {

    const tag = {
        name: req.body.name
    }

    Tag.create(tag)
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
    Tag.findAll({
        include: [
            {
                model: Login,
                as: "logins",
                attributes: ["id", "user", "email"],
                through: {
                    attributes: [],
                }
            },
        ],
    })
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


exports.addLogin = (req, res) => {
    //tagId, tutorialId)
    const tagId = req.body.tagId;
    const loginId = req.body.loginId;

    Tag.findByPk(tagId)
        .then((tag) => {
            if (!tag) {
                res.status(400).send({

                    message:
                        "No se encontro el tag"
                });
            }
            Login.findByPk(loginId).then((login) => {
                if (!login) {
                    console.log("Login not found!");
                    return null;
                }

                tag.addLogin(login);
                res.send(tag);
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Login."
            });
        });
};


exports.findAll = (req, res) => {
    Tag.findAll({
        include: [
            {
                model: Pagos ,
                as: "pagos",
                attributes: ["id", "cast"],
                through: {
                    attributes: [],
                }
            },
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Pago."
        });
});
};
exports.addPago = (req, res) => {
    //tagId, tutorialId)
    const tagId = req.body.tagId;
    const pagoId = req.body.pagoId;

    Tag.findByPk(tagId)
        .then((tag) => {
            if (!tag) {
                res.status(400).send({

                    message:
                        "No se encontro el tag"
                });
            }
            Pagos.findByPk(pagoId).then((pagos) => {
                if (!pagos) {
                    console.log("Pagos not found!");
                    return null;
                }

                tag.addPago(pagos);
                res.send(tag);
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Pagos."
            });
        });
};