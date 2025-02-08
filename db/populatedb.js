#! /usr/bin/env node
const { Client } = require("pg");
require("dotenv").config();

const query = `
    CREATE TABLE IF NOT EXISTS message_board (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR( 255 ) NOT NULL,
    user VARCHAR( 50 ) NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;

async function start() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
  });

  await client.connect();
  await client.query(query);
  await client.end();
  console.log("done");
}

start();
