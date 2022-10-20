import mongoose from "mongoose";

const bookschema = new mongoose.Schema({
  id: { type: String },
  author: { type: String, required: true },
  title: { type: String, required: true },
  editor: { type: String, required: true },
  number_of_pages: { type: Number },
});

const books = mongoose.model('livros', bookschema)

export default books;
