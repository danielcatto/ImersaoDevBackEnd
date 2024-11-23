import conectarAoBanco from "../dbConfig.js"


// Estabelece a conexão com o banco de dados usando a string de conexão fornecida
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// Função assíncrona para obter todos os posts do banco de dados
export default async function getTodosPosts() {
    // Conecta ao banco de dados 'imersao-instabytes'
    const db = conexao.db("imersao-instabytes");
  
    // Seleciona a coleção 'posts'
    const colecao = db.collection("posts");
  
    // Busca todos os documentos da coleção e converte para um array
    return colecao.find().toArray();
  }
  