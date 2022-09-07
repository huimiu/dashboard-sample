import Tasks from "../data/Task.json";
import TaskModel from "../model/TaskModel";
import {} from "./GetFiles";

export const getTask = (): TaskModel[] => Tasks;
