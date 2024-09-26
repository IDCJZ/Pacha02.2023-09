module.exports = app => {
    const logins = require("../controllers/login.controller.js");
    const tags = require("../controllers/tag.controller.js");
    const pagos = require("../controllers/pagos.controller.js");
    var router = require("express").Router();


    router.post("/", logins.create);
    router.get("/", logins.findAll);
    router.get("/:id", logins.findOne);
    router.put("/:id", logins.update);
    router.delete("/:id", logins.delete);
    router.delete("/", logins.deleteAll);
    
    router.post("/", pagos.create);
    router.get("/", pagos.findAll);
    router.get("/:id", pagos.findOne);
    router.put("/:id", pagos.update);
    router.delete("/:id", pagos.delete);
    router.delete("/", pagos.deleteAll);

    router.get("/curso/:id", logins.findAllCurso);

    router.post("/curso/:id", logins.createCurso);

    router.post("/tag", tags.create)
    router.get("/tag/id/", tags.findAll)
    router.post("/tag/curso", tags.addLogin)
    app.use('/api/logins', router);
}
