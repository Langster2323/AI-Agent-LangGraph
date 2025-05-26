import { SqlDatabase } from "langchain/sql_db";
import { DataSource } from "typeorm";

const datasource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
const db = await SqlDatabase.fromDataSourceParams({
  appDataSource: datasource,
});

export default db;

await db.run("SELECT * FROM Artist LIMIT 10;");