import express, { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import SettingRepository from './repositories/SettingRepository';
import SettingController from './controllers/SettingController';

const routes = express.Router();

const settingController = new SettingController();

routes.get('/settings', settingController.index);
routes.post('/settings', settingController.create);

export default routes;