export interface TaskItem {
  id?: string;
  name: string;
  status?: string;
  importance?: string;
  content?: string;
  createdDateTime?: string;
  lastModifiedDateTime?: string;
  url?: string;
  icon?: string;
}

export interface TaskModel {
  data: TaskItem[];
}
