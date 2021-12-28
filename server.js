import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";
// import contactRouter from "./routes/contact.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRouter);
// app.use("/contact", contactRouter);

const CONNECTION_URL =
  "mongodb+srv://MERN-STACK:4g8fJ790cyf5CsBV@cluster0.4s7rg.mongodb.net/MERN-STACK";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);

// contact
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://MERN-STACK:4g8fJ790cyf5CsBV@cluster0.4s7rg.mongodb.net/MERN-STACK"
);

const clientScheema = {
  fullname: String,
  phone: String,
  email: String,
  msg: String,
};

const Data = mongoose.model("Hamper-User-Msg", clientScheema);

app.post("/add", function (req, res) {
  const fullname = req.body.fullname;
  const phone = req.body.phone;
  const email = req.body.email;
  const msg = req.body.msg;

  const newMovie = new Data({
    fullname,
    phone,
    email,
    msg,
  });
  newMovie.save();
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
