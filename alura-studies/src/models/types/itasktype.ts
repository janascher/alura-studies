export interface ITask {
    task: string;
    time: string;
    selected: boolean;
    completed: boolean;
    id: string;
}

export interface ISelectTask {
    tasks: ITask[];
    selectTask: (taskSelected: ITask) => void;
}

export interface ITaskProps extends ITask {
    selectTask: (taskSelected: ITask) => void;
}

export interface ITaskSelected {
    selected: ITask | undefined;
}
