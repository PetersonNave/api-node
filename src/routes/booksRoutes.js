import express from "express";
import BookController from "../controllers/booksControllers.js";

const router = express.Router();

router
  .get("/livros", BookController.listBooks)
  .get("/livros/busca", BookController.listBooksByEditor)
  .get("/livros/:id", BookController.viewBookById)
  .post("/livros", BookController.addBook)
  .put("/livros/:id", BookController.updateBook)
  .delete("/livros/:id", BookController.deleteBook)
  
export default router;
