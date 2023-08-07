import express from "express";
//Controller methods import
import * as controller from "../controller/room_optionController.js";

export const room_optionRouter = express.Router();

room_optionRouter.get('/',controller.getAllRoomOptions);
room_optionRouter.get('/room/:id', controller.getAllOptionsOfARoom);