import { io } from '../http';
import ConnectionService from '../services/ConnectionService';
import MessageService from '../services/MessageService';

const messageService = new MessageService();
const connectionService = new ConnectionService();

io.on("connect", async(socket) => {
  const listUsersWithoutAtendments = await connectionService.findAllWithoutAdmin();

  io.emit("admin_list_all_users", listUsersWithoutAtendments);

  socket.on("admin_list_messages_by_user", async(params, callback) => {
    const { user_id } = params;

    const allMessagesUser = await messageService.listByUser(user_id);

    callback(allMessagesUser);
  });

  socket.on("admin_send_message", async(params) => {
    const { text, user_id } = params;

    await messageService.create({ admin_id: socket.id, text, user_id });

    const { socket_id } = await connectionService.findByUser(user_id);

    io.to(socket_id).emit("admin_send_message_to_client", {
      text,
      socket_id: socket.id,
    });

  });
});