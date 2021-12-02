var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');`
    
    ;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao,cadastrar2());
    
}
function cadastrar2(){
    var instrucao2 = `
    INSERT INTO clics (fkUsuario, fkPlaylist, clicsUni) VALUES ((select max(idUser) from usuario), 1, 0), 
    ((select max(idUser) from usuario), 2, 0), 
    ((select max(idUser) from usuario), 3, 0),
    ((select max(idUser) from usuario), 4, 0);

    `
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
    ;
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};