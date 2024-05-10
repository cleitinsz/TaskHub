import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import KnexConnection from "./infra/database/knex/KnexConnection";
import {
  RepositoryFactory,
  UseCaseFactory,
  ControllerFactory,
} from "./application/factory";
import Routes from "./infra/http/Routes";

const knexConnection = new KnexConnection();
const dbConnection = knexConnection.getInstance();

const repositoryFactory = new RepositoryFactory(dbConnection);
const useCaseFactory = new UseCaseFactory(repositoryFactory.repositories());
const controllerFactory = new ControllerFactory(useCaseFactory);

const router = new Routes(controllerFactory);

const app = express();

app.use(express.json());
app.use(cors());

app.use(router.routes());

export default app;
