import { getCustomRepository, Repository } from "typeorm";
import Connections from "../entities/Connections";
import ConnectionRepository from "../repositories/ConnectionRepository";

interface IConnection {
  user_id: string;
  admin_id?: string;
  socket_id: string;
  id?:string;
}

export default class ConnectionService {
  async index(): Promise<IConnection[]>{
    const connectionsRepository = getCustomRepository(ConnectionRepository);
    const connections = connectionsRepository.find()

    return connections
  }

  async findByUser(user_id: string): Promise<IConnection> {
    const connectionsRepository = getCustomRepository(ConnectionRepository);
    const connection = await connectionsRepository.findOne({ user_id });

    return connection;
  }

  async findBySocketId(socket_id: string): Promise<IConnection> {
    console.log('Socket', socket_id);
    const connectionsRepository = getCustomRepository(ConnectionRepository);
    const connection = await connectionsRepository.findOne({socket_id});
    console.log('Connection ->', connection);
    return connection;
  }

  async findAllWithoutAdmin():Promise<IConnection[]> {
    const connectionsRepository = getCustomRepository(ConnectionRepository);
    const connections = await connectionsRepository.find({
      where: { admin_id: null },
      relations: ['user'],
    })

    return connections;
  }

  async create({ admin_id, user_id, socket_id, id }: IConnection): Promise<IConnection>{
    const connectionsRepository = getCustomRepository(ConnectionRepository);
    const data = {admin_id, user_id, socket_id, id};

    const connection = connectionsRepository.create(data);

    await connectionsRepository.save(connection);

    return connection;
  }
}