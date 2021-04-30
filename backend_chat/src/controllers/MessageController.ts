import { Request, Response, Router } from "express";
import MessageService from "../services/MessageService";

const router = Router();
const messageService = new MessageService();

router.get('/:user_id', async(request: Request, response: Response) => {
  const { user_id } = request.params;
  try {
    const messages = await messageService.listByUser(user_id);
    return response.json(messages);
  }catch(err){
    return response.status(404).json(err.message)
  }
});

router.post('', async(request: Request, response: Response) => {
  const { admin_id, user_id, text } = request.body;
  try{
    const message = await messageService.create({ admin_id, user_id, text});
    return response.json(message);
  }catch(err){
    return response.status(400).json(err.message);
  }

});

router.delete('/:id', async( request: Request, response: Response ) => {
  const { id } = request.params;
  try{
    await messageService.delete(id);
    return response.status(204);
  }catch(err){
    return response.status(400).json(err.message)
  }
});

export default router;

