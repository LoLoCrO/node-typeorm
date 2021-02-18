import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
import "reflect-metadata";
import { createConnection } from "typeorm";
import database from "./config/database";

process.on("uncaughtException", (e) => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  console.log(e);
  process.exit(1);
});

// createConnection(database)
//   .then((connection) => {
//     // here you can start to work with your entities
//   })
//   .catch((error) => console.log(error));

const router = express();

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 3001 } = process.env;

router.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
