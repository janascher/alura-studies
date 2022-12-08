import { ITask } from './itaskprops';

export interface IFormProps {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}
