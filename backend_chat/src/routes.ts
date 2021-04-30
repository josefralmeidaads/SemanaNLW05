import express from 'express';
import SettingController from './controllers/SettingController';
import UserController from './controllers/UserController';
import MessageController from './controllers/MessageController';

const routes = express.Router();

routes.use('/messages', MessageController);
routes.use('/settings', SettingController);
routes.use('/users', UserController);

export default routes;