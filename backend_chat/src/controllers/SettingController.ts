import { Request, Response, Router } from "express";
import SettingsService from "../services/SettingsService";

const router = Router();
const settingsService = new SettingsService();

  router.get('' , async(request: Request, response: Response) => {
    const settings = await settingsService.index();
    return response.json(settings);
  });

  router.get('/:username', async(request: Request, response: Response) => {
    const { username } = request.params;
    try{
      const setting = await settingsService.findByUserName(username);
      return response.json(setting);
    }catch(err){
      return response.status(400).json(err.message)
    }
  });

  router.post( '' , async(request: Request, response: Response) => {
    const { chat, username } = request.body;
    try{
      const setting = await settingsService.create({chat, username});
      return response.json(setting);
    }catch(err){
      return response.status(400).json(err.message);
    }
  });

  router.delete('/:id', async(request: Request, response: Response) => {
    const { id } = request.params;
    try{
      await settingsService.delete(id);
    }catch(err){
      return response.status(400).json(err.message)
    }
  });

  router.put('/:id', async(request: Request, response: Response) => {
    const { id } = request.params;
    const { username, chat } = request.body;
    try{
      const setting = await settingsService.updateChat({ id, username, chat });
      return response.json(setting);
    }catch(err){
      return response.status(400).json(err.message);
    }
  });

export default router;