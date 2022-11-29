import { ITask } from "./types/itasktype";

export interface IFormProps{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}