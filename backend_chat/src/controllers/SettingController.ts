import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import SettingRepository from "../repositories/SettingRepository";

export default class SettingController{
  async index(request: Request, response: Response) {
    const settingsRepository = getCustomRepository(SettingRepository);
    const settings = await settingsRepository.find();

    return response.json(settings);
  }

  async create(request: Request, response: Response){
    const { chat, username } = request.body;
    const settingsRepository = getCustomRepository(SettingRepository);

    const setting = settingsRepository.create({
      chat,
      username,
    });
    
    try{
      await settingsRepository.save(setting);
      return response.json(setting);
    }catch(err){
      return response.json({ message: 'Não foi possível criar os dados!' });
    }
  }
}