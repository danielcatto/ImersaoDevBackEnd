import fs from "fs"; // Importa o módulo do sistema de arquivos do Node.js
import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModel.js"; // Importa funções para obter e criar posts

// Função para a página inicial
export async function index(req, res) {
    res.status(200).json({ "boas-vindas": "Index.html" }); // Envia uma mensagem de boas-vindas como resposta JSON
}

// Função para listar todos os posts
export async function listarPost(req, res) {
    const posts = await getTodosPosts(); // Obtém todos os posts do banco de dados
    res.status(200).json(posts); // Envia os posts como resposta JSON
}

// Função para criar um novo post
export async function postarNovoPost(req, res) {
    const novoPost = req.body; // Obtém os dados do novo post do corpo da requisição
    try {
        const postCriado = await criarPost(novoPost); // Cria o novo post no banco de dados
        res.status(200).json(postCriado); // Envia o post criado como resposta JSON
    } catch (erro) {
        console.error(erro.message); // Imprime a mensagem de erro no console
        res.status(500).json({ "Erro": "Falha no post" }); // Envia uma mensagem de erro como resposta JSON
    }
}

// Função para fazer upload de uma imagem e criar um novo post
export async function uploadImagem(req, res) {
    const novoPost = req.body; // Obtém os dados do novo post do corpo da requisição
    try {
        const postCriado = await criarPost(novoPost); // Cria o novo post no banco de dados
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`; // Define o novo caminho da imagem
        fs.renameSync(req.file.path, imagemAtualizada); // Renomeia o arquivo da imagem para o novo caminho
        res.status(200).json(postCriado); // Envia o post criado como resposta JSON
    } catch (erro) {
        console.error(erro.message); // Imprime a mensagem de erro no console
        res.status(500).json({ "Erro": "Falha no post" }); // Envia uma mensagem de erro como resposta JSON
    }
}



// Função para Atualizar novo post
export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    const post = {
        imgUrl: urlImagem,
        descricao: req.body.descricao,
        alt: req.body.alt
    }

    try {
        const postCriado = await atualizarPost(id, post); 
        res.status(200).json(postCriado); 
        console.log("edit 2 aqui")
    } catch (erro) {
        console.error(erro.message); 
        res.status(500).json({ "Erro": "Falha no post" });
    }
}