const express = require('express');
const app = express();
const port = 8080;
const menu = require('./menu.json');

app.get('/menu', (req, res) => {
  res.send(menu);
});

app.get('/menu/:id', (req, res) => {
  const menuId = req.params.id;
  const result = menu.find(menuItem => menuItem.id == menuId);
  res.send(result);
});

app.get('/principales', (req, res) => {
  const principales = menu.filter((item) =>
    item.tipo == "principal"
  )
  res.send(principales)
});

app.get('/postre', (req, res) => {
  const principales = menu.filter((item) =>
    item.tipo == "principal"
  )
  res.send(principales)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});