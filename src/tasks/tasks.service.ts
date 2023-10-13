import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from "./dto/create-task.dto";


@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  deleteTaskById(id: string): Boolean {
    const index = this.tasks.findIndex(taskObj => {
      return taskObj.id === id;
    });

    //console.log(index)
    if( index == undefined ){
      return false;
    }

    this.tasks.splice(index, 1);
    return true;
  }

  createTask(createTaskDto: CreateTaskDto):Task {
    const {title, description} = createTaskDto;
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
