import { getCustomRepository, Repository } from "typeorm";
import Setting from "../entities/Setting";
import SettingRepository from "../repositories/SettingRepository";

interface ISettings {
  id?: string;
  chat: boolean,
  username: string,
}

export default class SettingsService {
 async index():Promise<ISettings[]>{
  const settingsRepository = getCustomRepository(SettingRepository);
  const settings = await settingsRepository.find();
  return settings;
 }

 async create({ chat, username }: ISettings):Promise<ISettings>{
  const settingsRepository = getCustomRepository(SettingRepository);
    const userFinder = await settingsRepository.findOne({ username }); 

    if(userFinder){
      throw new Error("Usuário Já Existe");
    }
    const setting = settingsRepository.create({ chat, username });
    await settingsRepository.save(setting);
    return setting;
 }

 async delete( id : string): Promise<void> {
  const settingsRepository = getCustomRepository(SettingRepository);
  const settingExist = await settingsRepository.findOne({ id });
  
  if(!settingExist){
    throw new Error("Está configuração não Existe");
  }

  await settingsRepository.delete(id);
 }

 async findByUserName(username:string):Promise<ISettings>{
  const settingsRepository = getCustomRepository(SettingRepository);
  const setting = await settingsRepository.findOne({ username });
  if(!setting){
    throw new Error("Este username não existe");
  }
  return setting;
 }

 async updateChat({ id, username, chat }: ISettings){
  const data = { id, username, chat}
  const settingsRepository = getCustomRepository(SettingRepository);
  const settExists = await settingsRepository.findOne(id);
  if(!settExists){
    throw new Error("Não existe esta settings");
  }
  const setting = await settingsRepository.save(data);
  return setting;
 }
}