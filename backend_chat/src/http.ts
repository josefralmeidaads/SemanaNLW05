import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import './database/connection';

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request: Request, response: Response) => {
  return response.render("html/client.html")
});

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
  console.log('Se conectou', socket.id);
});

app.use(cors());
app.use(express.json());
app.use(routes);

export { http, io };
