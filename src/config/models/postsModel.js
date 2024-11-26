import { ObjectId } from "mongodb";
import conectarAoBanco from "../dbConfig.js" // Importa a função para conectar ao banco de dados de outro arquivo.
// Estabelece a conexão com o banco de dados usando a string de conexão fornecida

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Cria uma conexão com o banco de dados usando a string de conexão do ambiente.

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
  // Conecta ao banco de dados 'imersao-instabytes'
  const db = conexao.db("imersao-instabytes"); // Seleciona o banco de dados específico.
  // Seleciona a coleção 'posts'
  const colecao = db.collection("posts"); // Seleciona a coleção onde os posts estão armazenados.
  // Busca todos os documentos da coleção e converte para um array
  return colecao.find().toArray(); // Retorna um array com todos os posts encontrados.
}

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instabytes"); // Seleciona o banco de dados específico.
  const colecao = db.collection("posts"); // Seleciona a coleção onde os posts estão armazenados.
  return colecao.insertOne(novoPost); // Insere um novo post na coleção e retorna um objeto com informações sobre a inserção.
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}