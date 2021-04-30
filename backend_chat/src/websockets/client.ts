import { io } from '../http';
import ConnectionService from '../services/ConnectionService';
import MessageService from '../services/MessageService';
import UserService from '../services/UserService';

interface IParams {
  text: string;
  email: string;
}

io.on("connect", (socket) => {
  const connectionService = new ConnectionService();
  const userService = new UserService();
  const messageService = new MessageService();

  socket.on("client_first_access", async(params) => {
    const socket_id = socket.id;
    const { text, email } = params as IParams;
    let user_id = null;

    const userExists = await userService.findByEmail(email);

    if(!userExists){
      const user = await userService.create({ email });
      await connectionService.create({ user_id: user.id, socket_id });
      user_id = user.id

    } else {
      const connectionExists = await connectionService.findByUser(userExists.id);
      user_id = userExists.id;

      if(!connectionExists){
        await connectionService.create({ user_id: userExists.id, socket_id });
      } else {
        connectionExists.socket_id = socket_id;
        await connectionService.create(connectionExists);
      }
      
    }
    await messageService.create({ user_id, text });
  })
});