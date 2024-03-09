const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  return res.status(200).send("Selamat datang di coba-coba CI/CD");
});

app.get("/nama", (req, res) => {
  const nama = req.query.nama;
  return res.status(200).send(`Hello ${name}`);
});

app.get("/alamat", (req, res) => {
  const alamat = req.query.alamat;
  return res.status(200).send(`Kamu tinggal di ${alamat}`);
});

app.listen(port, () => {
  console.log(`This app running at http://localhost:${port}`);
});
