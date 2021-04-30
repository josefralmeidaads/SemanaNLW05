import { getCustomRepository, Repository } from "typeorm";
import Message from "../entities/Message";
import MessageRepository from "../repositories/MessageRepository";

interface IMessage {
  id?: string;
  admin_id?: string;
  user_id: string;
  text: string;
}


export default class MessageService {
  async create({ admin_id, text, user_id }: IMessage): Promise<IMessage> {
    const messageRepository = getCustomRepository(MessageRepository);
    const data = {
      admin_id,
      text,
      user_id
    }

    const message = messageRepository.create(data);
    try{
      await messageRepository.save(message);
      return message;
    }catch(err){
      throw new Error("Falha na operação");
    }
  }

  async listByUser(user_id: string): Promise<IMessage[]> {
    const messageRepository = getCustomRepository(MessageRepository);
    const messages = await messageRepository.find({
      where: { user_id },
      relations: ['user']
    });
    return messages;
  }

  async delete(id: string): Promise<void> {
    const messageRepository = getCustomRepository(MessageRepository);
    const idExist = await messageRepository.findOne({ id });

    if(!idExist){
      throw new Error('Este ID não existe!');
    }
    
    await messageRepository.delete(id);
  }
}