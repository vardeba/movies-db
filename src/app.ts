import cors from "cors";
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./errors";

export const app = express();

app.use(cors());

app.use(express.json());

// app.use("/users", usersRoutes);

// app.use("/login", loginRoutes);

app.use(handleErrors);
