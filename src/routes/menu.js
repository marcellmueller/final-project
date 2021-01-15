const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("menu route");
    db.query(`SELECT * FROM menu_items;`)
      .then((data) => {
        const menu = data.rows;
        res.send(menu);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    console.log("menu item id route");
    const item = req.params.id;
    db.query(
      `SELECT * FROM menu_items
              WHERE id = $1;`,
      [item]
    )
      .then((data) => {
        const item = data.rows[0];
        res.send(item);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};