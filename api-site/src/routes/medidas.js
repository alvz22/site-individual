var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:fkPlaylist", function (req, res) {
  medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:fkPlaylist", function (req, res) {
  medidaController.buscarMedidasEmTempoReal(req, res);
});

router.post("/tempo-real/xpto", function (req, res) {
  medidaController.atualizarMedidas(req, res);
});

module.exports = router;
