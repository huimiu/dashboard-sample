import TaskModel from "../model/TaskModel";
import Tasks from "../data/Task.json";

export const getTask = (): TaskModel[] => Tasks;
