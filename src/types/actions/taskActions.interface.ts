import { ITask, ITaskData } from '../stores/tasksStore.interface'
import TasksActions from './taskActions.enum'

export interface IChangeTaskPositionData {
	source: number
	destination: number
	destinationStatus: string
}

export type INewTask = Omit<ITask, 'id' | 'data'> & Omit<ITaskData, 'comments'>

export interface IChangeTaskPosition {
	type: TasksActions.CHANGE_TASK_POSITION
	payload: IChangeTaskPositionData
}

export interface IFetchTasks {
	type: TasksActions.FETCH_TASKS
	payload: string
}

export interface ISetTasks {
	type: TasksActions.SET_TASKS
	payload: ITask[]
}

export interface ICreateNewTask {
	type: TasksActions.CREATE_NEW_TASK
	payload: INewTask
}

export interface ISendRequest {
	type: TasksActions.SEND_REQUEST
}

type TaskReducerActions = IChangeTaskPosition | ISetTasks | ICreateNewTask | ISendRequest | IFetchTasks

export type { TaskReducerActions }
