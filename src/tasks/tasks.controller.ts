import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task } from "./task.model";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService ) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTask();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) : Task {

    return this.tasksService.createTask(createTaskDto);
  }
}

