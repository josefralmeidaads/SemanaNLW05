import { getCustomRepository, getRepository, Repository } from "typeorm";
import User from "../entities/User";
import UserRepository from "../repositories/UserRepository";

interface IUser {
  id?: string;
  email: string;
}

interface IUserDelete {
  id: string;
}

export default class UserService {
 async index (): Promise<IUser[]> {
  const userRepository = getCustomRepository(UserRepository);
  const users = await userRepository.find();

  return users;
 }

 async findByEmail(email: string): Promise<IUser> {
  const userRepository = getCustomRepository(UserRepository);
  const user = await userRepository.findOne({ email })
  return user;
}

 async create({ email }: IUser): Promise<IUser> {
  const userRepository = getCustomRepository(UserRepository);
   const finderEmail = await userRepository.findOne({ email });
   if(finderEmail){
     return finderEmail
   }
   const user = userRepository.create({ email });
   await userRepository.save(user);

   return user;
 }

 async update({ id, email }: IUser): Promise<IUser> {
  const userRepository = getCustomRepository(UserRepository);
   const finderUser = await userRepository.findOne({ id });

   if(!finderUser){
     throw new Error("Este Usuário não existe");
   }

   const user = await userRepository.save({ id, email });

   return user;
 }

 async delete({ id }: IUserDelete): Promise<void> {
  const userRepository = getCustomRepository(UserRepository);
  const userExist = await userRepository.findOne({ id });

  if(!userExist){
    throw new Error('Usuário Não Existe');
  }

  await userRepository.delete(id);
 }
}