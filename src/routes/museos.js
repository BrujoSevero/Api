const express = require("express");
const Museo = require('../models/museo'); 

const router = express.Router();

// create museos
router.post("/museos", (req, res) => {
    const museo = new Museo(req.body); 
    museo.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
});

// get all museos
router.get("/museos", (req, res) => {
    Museo.find().then((data) => res.json(data)).catch((error) => res.json({message: error}))
});

// get a museo
router.get("/museos/:id", (req, res) => {
    const { id } = req.params;
    Museo
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// delete a museo
router.delete("/museos/:id", (req, res) => {
    const { id } = req.params;
    Museo
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// update a museo
router.put("/museos/:id", (req, res) => {
    const { id } = req.params;
    const { imagen, nombre, direccion, telefono, correo, web, horarios, descripcion, transporte, ubicacion } = req.body;
    Museo
      .updateOne({ _id: id }, { $set: { imagen, nombre, direccion, telefono, correo, web, horarios, descripcion, transporte, ubicacion} })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;