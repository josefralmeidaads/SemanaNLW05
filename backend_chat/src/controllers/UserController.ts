import { Request, Response, Router } from "express";
import UserService from "../services/UserService";

const router = Router();
const userService = new UserService();

  router.get('', async(request: Request, response: Response) => {
    const users = await userService.index();
    return response.json(users);
  });

  router.get('/email', async(request: Request, response: Response) => {
    const { email } = request.body;
    try{
      const users = await userService.findByEmail(email);
      return response.json(users);
    }catch(err){
      return response.status(400).json(err.message);
    }
  });

  router.post('', async(request: Request, response: Response) => {
    const { email } = request.body;
    try {
      const user = await userService.create({ email });
      return response.json(user);
    }catch(err){
      return response.status(400).json(err.message);
    }
  });

  router.put('/:id', async(request: Request, response: Response) =>{
    const { id } = request.params;
    const { email } = request.body;
    try {
     const user = await userService.update({ id, email });
     return response.json(user);
    }catch(err){
      return response.status(400).json(err.message)
    }
  });

  router.delete('/:id', async(request: Request, response: Response) => {
    const { id } = request.params;
    try{
      await userService.delete({ id });
    }catch(err){
      return response.status(400).json(err.message)
    }
  });

export default router;