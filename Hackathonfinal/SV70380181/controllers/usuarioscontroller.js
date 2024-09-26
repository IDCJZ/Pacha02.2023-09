import { pool } from "../db.js";

export const renderusuario = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM usuario");
  res.render("usuario", { usuario: rows });
};

export const createCustomers = async (req, res) => {
  const newUsuario = req.body;
  await pool.query("INSERT INTO usuario set ?", [newUsuario]);
  res.redirect("/");
};

export const editUsuario = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM usuario WHERE id = ?", [
    id,
  ]);
  res.render("usuario_edit", { usuario: result[0] });
};

export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const newUsuario = req.body;
  await pool.query("UPDATE usuario set ? WHERE id = ?", [newUsuario, id]);
  res.redirect("/");
};

export const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM usuario WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Usuario deleted" });
  }
  res.redirect("/");
};
