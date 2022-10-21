import express from "express";
import AuthorController from "../controllers/authorsControllers.js";

const router = express.Router();

router
  .get("/autores", AuthorController.listAuthors)
  .get("/autores/:id", AuthorController.viewAuthorById)
  .post("/autores", AuthorController.addAuthor)
  .put("/autores/:id", AuthorController.updateAuthor)
  .delete("/autores/:id", AuthorController.deleteAuthor);

export default router;
