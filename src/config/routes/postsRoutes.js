import express from "express";
import { listarPost } from "../controllers/postsController.js";

const routes = (app) => {
    // Habilita o middleware para analisar corpos de requisições JSON
    app.use(express.json());
    

    // Define uma rota para a raiz ('/')
    app.get("/", (req, res) => {
        // Envia uma resposta de texto simples
        res.status(200).send("Imersão DEV Backend");
    });

    // Define uma rota para buscar todos os posts
    app.get("/posts", listarPost);
    
}

export default routes;