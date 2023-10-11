import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string):Task {
    const task: Task = {
      id: uuidv4(),
      title: title,
      description: description,
      status: TaskStatus.OPEN
    };

    this.tasks.push(task)
    return task

  }
}