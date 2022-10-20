import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://bookApi:root@cluster0.9phlb7a.mongodb.net/api-livros"
);

let db = mongoose.connection

export default db