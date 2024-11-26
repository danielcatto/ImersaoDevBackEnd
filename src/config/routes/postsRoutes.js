import express from "express"; // Importa o módulo Express.js para criar a API
import multer from "multer"; // Importa o módulo Multer para lidar com uploads de arquivos
import { listarPost, postarNovoPost, index, uploadImagem, atualizarNovoPost} from "../controllers/postsController.js"; // Importa funções controladoras de posts
import cors from "cors";


const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200 
}
// Configuração de armazenamento para uploads (somente para Windows)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Define o diretório para salvar os uploads
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Usa o nome original do arquivo
  },
});

// Final da configuração específica para Windows

// Configura o upload para salvar arquivos na pasta uploads
const upload = multer({ dest: "./uploads", storage }); // Define o destino e a estratégia de armazenamento

// Função para definir as rotas da API
const routes = (app) => {
  // Habilita o middleware para analisar dados JSON no corpo da requisição
  app.use(express.json());

  app.use(cors(corsOptions));

  // Rota GET para a raiz('/') - Provavelmente exibe uma mensagem de boas-vindas
  app.get("/", index);

  // Rota GET para '/posts' - Busca e retorna todos os posts
  app.get("/posts", listarPost);

  // Rota POST para '/posts' - Cria um novo post utilizando os dados do corpo da requisição
  app.post("/posts", postarNovoPost);

  // Rota POST para '/upload' - Realiza upload de uma imagem utilizando o middleware 'upload.single("imagem")'
  // e chama a função 'uploadImagem' para processar o post com a imagem
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost);
  console.log("edit 1 aqui")
};

// Exporta a função 'routes' para ser utilizada no arquivo principal da API
export default routes;