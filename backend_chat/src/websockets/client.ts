import { io } from '../http';
import ConnectionService from '../services/ConnectionService';
import MessageService from '../services/MessageService';
import UserService from '../services/UserService';

const connectionService = new ConnectionService();
const userService = new UserService();
const messageService = new MessageService();

io.on("connect", (socket) => {
  
  socket.on("client_first_access", async(params) => {
    const { text, email } = params;
    const socketId = socket.id;
    let user = null;
    let user_id = null;

    const userExists = await userService.findByEmail(email);
    if(!userExists){
      user = await userService.create({ email });
      user_id = user.id;
    } else {
      user = await userService.update({ id: userExists.id, email: userExists.email });
      user_id = user.id;
    }

    const connectionExists = await connectionService.findByUser(user_id);

    if(!connectionExists){
      await connectionService.create({ user_id: user.id, socket_id: socketId });
    }else {
      await connectionService.create({ id:connectionExists.id ,user_id: connectionExists.user_id, socket_id: socketId });
    }

    await messageService.create({ user_id, text });

    const allMessages = await messageService.listByUser(user_id);

    socket.emit("client_list_all_messages", allMessages);

    const allUsers = await connectionService.findAllWithoutAdmin();

    io.emit("admin_list_all_users", allUsers);
  });

  socket.on("client_send_message", async(params) => {
    const { message } = params;

    const _socket_id = socket.id;

    const { user_id } = await connectionService.findBySocketId(socket.id);

    const messages = await messageService.create({ text:message, user_id });

    io.to(params.socket_id).emit("client_send_message_to_admin", {
      messages,
      socket_id: _socket_id
    });
  });

});