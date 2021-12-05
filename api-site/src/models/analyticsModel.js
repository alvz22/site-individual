var database = require("../database/config")

function listar() {
    var instrucao = `
    Select sum(clicsUni) as likes from playlist join clics on fkPlaylist = idPlaylist group by nomePlaylist;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
};