import Events from "../data/Events.json";
import Tasks from "../data/Task.json";

import Files from "../data/Files.json";
import EventsModel from "../model/EventsModel";
import FilesModel from "../model/FilesModel";
import TaskModel from "../model/TaskModel";
import {} from "./GetFiles";

export const getTask = (): TaskModel[] => Tasks;

export const getEvents = (): EventsModel[] => Events;

export const getFiles = (): FilesModel[] => Files;
