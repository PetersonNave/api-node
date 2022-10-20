import express from "express";
import BookController from "../controllers/booksControllers.js";

const router = express.Router();

router
    .get("/livros", BookController.listBooks)

export default router;

