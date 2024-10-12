const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'mysql-eszca.alwaysdata.net',
  user: 'eszca',  
  password: '806cf832-1b8b-4808-b88f-4c3bcc232436',  
  database: 'eszca_fb' 
});


db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

app.post('/save', (req, res) => {
  const { email, password } = req.body;
  
  const query = 'INSERT INTO login (user, password) VALUES (?, ?)';
  db.query(query, [email, password], (err, result) => {
      if (err) throw err;
      res.status(200).json({ message: 'Datos guardados correctamente' });
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});