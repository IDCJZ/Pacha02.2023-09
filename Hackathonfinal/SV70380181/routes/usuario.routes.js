import { Router } from "express";
import {
  createUsuario,
  deleteUsuario,
  editUsuario,
  renderusuario,
  updateUsuario,
} from "../controllers/usuarioscontroller.js";
const router = Router();

router.get("/", renderusuario);
router.post("/add", createUsuario);
router.get("/update/:id", editUsuario);
router.post("/update/:id", updateUsuario);
router.get("/delete/:id", deleteUsuario);

export default router;
