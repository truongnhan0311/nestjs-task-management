import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task-status-enum";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatused = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE
    ];

    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase();

        //console.log('value', value);
        //console.log('metadata', metadata);

        if( !this.isStatusValid(value)){
            throw new BadRequestException(`${value} is an invalid status`);
        }

        return value;
    }

    private isStatusValid(status: any){
       const idx = this.allowedStatused.indexOf(status);
       return idx !== -1;
    }

}