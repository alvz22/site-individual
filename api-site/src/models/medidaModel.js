var database = require("../database/config");

function buscarUltimasMedidas(Usuario, limite_linhas, playlist) {
  instrucaoSql = `select 
                        fkUsuario, 
                        clicsUi, 
                        fkPlaylist,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from clics
                    where fkUsuario = ${idUsuario} and fkPlaylist = ${playlist}
                    order by id desc limit ${limite_linhas}`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarMedidas(fkPlaylist, fkUsuario) {
  instrucaoSql = `  update  
                    clics
                    set clicsUni = clicsUni + 1
                    where fkPlaylist =  ${fkPlaylist} and fkUsuario = ${fkUsuario};
                `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimasMedidas,
  atualizarMedidas,
};
