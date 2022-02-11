import {Developer} from "./developer.model";
import {Taskstatus} from "./taskstatus.model";
import {Taskstype} from "./taskstype.model";

export class Task {
  created?: Date;
  title?: string;
  nbHoursForecast?: number;
  nbHoursReal?: number;
  developers?: Array<Developer>;
  taskstatut?: Taskstatus;
  tasktype?: Taskstype;

}
