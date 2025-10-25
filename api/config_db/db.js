import mysql from "mysql2"

export const db = mysql.createConnection({
  host: 'mysql-fatec-lopes.mysql.database.azure.com',
  user: 'glopes',
  password: '9230gui**',
  database: 'psiconect',
  port: 3306,
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err);
    return;
  }
  console.log("Conexão com o MySQL no Azure estabelecida com sucesso!");
});
