var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
  const limite_linhas = 7;

  var fkPlaylist = req.params.fkPlaylist;

  console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

  medidaModel
    .buscarUltimasMedidas(fkPlaylist, limite_linhas)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function atualizarMedidas(req, res) {
  var fkPlaylist = req.body.fkPlaylist;

  console.log(`Recuperando medidas em tempo real`);

  medidaModel
    .atualizarMedidas(fkPlaylist)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  buscarUltimasMedidas,
  atualizarMedidas,
};
