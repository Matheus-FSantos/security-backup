import express from "express";
import { UsersController } from "../controller/UsersController.js";

const routes = express.Router();
const usersController = new UsersController();

routes.use(express.json());

routes.get("/users", (request, response) => usersController.findAll(request, response));
routes.get("/user/:id", (request, response) => usersController.findById(request, response));
routes.get("/users/name-like/:name", (request, response) => usersController.findByNameLike(request, response));
routes.post("/users", (request, response) => usersController.create(request, response));
routes.delete("/user/:id", (request, response) => usersController.delete(request, response));
 
export { routes }