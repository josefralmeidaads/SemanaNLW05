import express, { Request, Response } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';
import routes from './routes';
import './database/connection';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request: Request, response: Response) => {
  return response.render("html/client.html");
});

app.get("/pages/admin", (request: Request, response: Response) => {
  return response.render("html/admin.html");
});

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
  console.log('se conectou id ->', socket.id);
});

app.use(cors());
app.use(express.json());
app.use(routes);

export {http, io};