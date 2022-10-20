import express from "express";
const app = express()


const books = [
  {
    id: "1",
    title: "senhor dos anéis",
  },
  {
    id: "2",
    title: "Até que a sorte nos separe",
  },
];

app.get('/', (req, res) => {
    res.status(200).send('CURSO DE NODE')
})
app.get('/livros', (req, res) => {
    res.status(200).json(books)
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('livro cadastrado com sucesso!')
})
export default app  