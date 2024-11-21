import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Outra foto",
        imagem: "https://placecats.com/charlie/300/150",
    },
    {
        id: 3,
        descricao: "Mais uma foto",
        imagem: "https://placecats.com/max/300/150",
    },
    {
        id: 4,
        descricao: "Gato curioso",
        imagem: "https://placecats.com/whiskers/300/150",
    },
    {
        id: 5,
        descricao: "Gato brincando",
        imagem: "https://placecats.com/fluffy/300/150",
    },
    {
        id: 6,
        descricao: "Gato dormindo",
        imagem: "https://placecats.com/sleepy/300/150",
    },
    {
        id: 7,
        descricao: "Gato caçando",
        imagem: "https://placecats.com/hunter/300/150",
    },
    {
        id: 8,
        descricao: "Gato engraçado",
        imagem: "https://placecats.com/funny/300/150",
    },
    {
        id: 9,
        descricao: "Gato elegante",
        imagem: "https://placecats.com/grace/300/150",
    },
    {
        id: 10,
        descricao: "Gato aventureiro",
        imagem: "https://placecats.com/adventure/300/150",
    }
];



const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log("servidor escutando...");
});


app.get("/", (req, res) => {
    res.status(200).send("Imersão DEV Backend");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts)
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index])
});

