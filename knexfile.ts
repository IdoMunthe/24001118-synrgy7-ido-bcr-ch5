import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      database: "postgres",
      user: "postgres",
      password: "siantar72", 
      port: 3000
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {

      directory: "./migrations"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "postgres",
      user: "postgres",
      password: "siantar72"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
