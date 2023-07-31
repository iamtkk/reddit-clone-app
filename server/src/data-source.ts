import "reflect-metadata";
import { DataSource } from "typeorm";
// import * as glob from "glob";
import Sub from "./entities/Sub";
import Post from "./entities/Post";
import Vote from "./entities/Vote";
import Comment from "./entities/Comment";
import Entity from "./entities/Entity";
import { User } from "./entities/User";

// const entityFiles = glob.sync("src/entities/**/*.ts", { cwd: __dirname });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "reddit",
  synchronize: true,
  logging: false,
  // entities: ["src/entities/**/*.ts"],
  // entities: entityFiles,
  entities: [Sub, User, Post, Vote, Comment, Entity],
  migrations: [],
  subscribers: [],
});
