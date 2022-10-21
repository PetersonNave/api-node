import books from "../models/Book.js";

class BookController {
  static listBooks = (req, res) => {
    books
      .find()
      .populate("author")
      .exec((err, books) => {
        res.status(200).json(books);
      });
  };

  static viewBookById = (req, res) => {
    const id = req.params.id;
    books
      .findById(id)
      .populate("author", "name")
      .exec((err, books) => {
        if (!err) {
          res.status(200).send(books);
        } else {
          res
            .status(400)
            .send({ message: `Erro ao buscar livro ${id}. \n${err}` });
        }
      });
  };

  static listBooksByEditor = (req, res) => {
    const editor = req.query.editor 

    books.find({'editor': editor }, {}).populate('author').exec((err, books) => {
      res.status(200).send(books)
    })
  }

  static addBook = (req, res) => {
    let book = new books(req.body);
    book.save((err) => {
      if (err)
        res
          .status(500)
          .send({ message: `Falha ao cadastrar livro: ${err.message}` });
      else {
        res.status(201).send(book.toJSON());
      }
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      (err) => {
        if (!err) {
          res.status(200).send({ message: "Livro atualizado com sucesso!" });
        } else
          res
            .status(500)
            .send({ message: `Erro ao atualizar o livro. ${err}` });
      }
    );
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send(`livro ${id} foi removido com sucesso!`);
      } else {
        res
          .status(500)
          .send({ message: `Erro ao remover livro ${id}. \n${err}` });
      }
    });
  };
}

export default BookController;
