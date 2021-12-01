var database = require("../database/config");

function buscarUltimasMedidas(idPlaylist, limite_linhas) {
  instrucaoSql = `select 
                        temperatura, 
                        umidade, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fkPlaylist = ${idPlaylist}
                    order by id desc limit ${limite_linhas}`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarMedidas(fkPlaylist) {
  instrucaoSql = `  update  
                    clics
                    set clicsUni = clicsUni + 1
                    where fkPlaylist = ${fkPlaylist};
                `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimasMedidas,
  atualizarMedidas,
};
