// Importa o framework Express.js para criar aplicações web
import express from "express";
 // Importa a função para conectar ao banco de dados
import conectarAoBanco from "./src/config/dbConfig.js";
import routes from "./src/config/routes/postsRoutes.js";


// Cria uma instância do aplicativo Express
const app = express();
app.use(express.static("uploads"));
routes(app)

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor escutando na porta 3000...");
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}


