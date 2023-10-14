import { Injectable, NotFoundException } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";
import { v4 as uuidv4 } from "uuid";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";


@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find(task => task.id === id);
    if(!task){
        throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    //const objIndex = this.tasks.findIndex((task => task.id === id));
    //this.tasks[objIndex]["status"] =  status;
    const task = this.getTaskById(id);
    task.status = status;
    return task
  }
 
  deleteTaskById(id: string): void {
    const foundTask = this.getTaskById(id);
    this.tasks.filter(task => task.id !== foundTask.id);
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

  getTaskFilerDto(filerDto: GetTasksFilterDto): Task[] {
    const {status, search} = filerDto;
    let tasks = this.getAllTask();

    if (status){
      tasks = tasks.filter(task => task.status === status);
    }

    if(search) {
      tasks = tasks.filter(task => {
        task.title.includes(search) ||
        task.description.includes(search)
      })
    }

    return tasks;
  }
}
