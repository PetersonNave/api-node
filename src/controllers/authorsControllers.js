import authors from "../models/Author.js";

class AuthorController {
  static listAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static viewAuthorById = (req, res) => {
    const id = req.params.id;
    authors.findById(id, (err, authors) => {
      if (!err) {
        res.status(200).send(authors);
      } else {
        res
          .status(400)
          .send({ message: `Erro ao buscar autor ${id}. \n${err}` });
      }
    });
  };

  static addAuthor = (req, res) => {
    let Author = new authors(req.body);
    Author.save((err) => {
      if (err)
        res
          .status(500)
          .send({ message: `Falha ao cadastrar autor: ${err.message}` });
      else {
        res.status(201).send(Author.toJSON());
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      (err) => {
        if (!err) {
          res.status(200).send({ message: "Autor atualizado com sucesso!" });
        } else
          res
            .status(500)
            .send({ message: `Erro ao atualizar o autor. ${err}` });
      }
    );
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send(`autor ${id} foi removido com sucesso!`);
      } else {
        res
          .status(500)
          .send({ message: `Erro ao remover autor ${id}. \n${err}` });
      }
    });
  };
}

export default AuthorController;
