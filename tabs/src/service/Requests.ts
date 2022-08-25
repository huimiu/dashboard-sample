import Files from '../data/Files.json';
import Tasks from '../data/Task.json';
import FilesModel from '../model/FilesModel';
import TaskModel from '../model/TaskModel';

export const getTask = (): TaskModel[] => Tasks;

export const getFiles = (): FilesModel[] => Files;
