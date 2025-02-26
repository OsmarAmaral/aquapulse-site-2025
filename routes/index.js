const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home", { layout: false , title: "AquaPulse" });
});

router.get("/products", (req, res) => {
    res.render("products", { layout: false , title: "AquaPulse - Produtos" });
});

module.exports = router;

/*
router.get("/nomeDaRota", (req, res) => {
    res.send("nomeDoArquivo", { layout: false , title: "tituloDaPágina" });
});
    */
