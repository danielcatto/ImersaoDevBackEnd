import getTodosPosts from "../models/postsModel.js";


export async function listarPost(req, res)  {
    // Busca todos os posts usando a função `getTodosPosts`
    const posts = await getTodosPosts();
    // Envia os posts como uma resposta JSON
    res.status(200).json(posts); 
}

