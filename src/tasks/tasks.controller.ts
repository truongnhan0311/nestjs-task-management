import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { TaskStatusValidationPipe } from "./pipe/task-status-validation-pipe";
import { Task } from "./task.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Controller('tasks')
export class TasksController {
  constructor(
    private tasksService: TasksService
  ) {}

  // @Get()
  // getAllTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {

  //   if(Object.keys(filterDto).length){
  //     return this.tasksService.getTaskFilerDto(filterDto);
  //   }

  //   return this.tasksService.getAllTask();
  // }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string) {
  //   return this.tasksService.deleteTaskById(id);
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateTaskDto) : Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(@Param('id') id: string,
  //                  @Body('status', TaskStatusValidationPipe) status: TaskStatus){
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}

