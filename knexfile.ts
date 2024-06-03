import type { Knex } from "knex";


const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      database: "postgres_development",
      user: "postgres",
      password: "siantar72",
      port: 3000,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./migrations",
    },
  },
};

module.exports = config;
