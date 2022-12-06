import TasksActions from 'src/types/actions/taskActions.enum'
import {
	IChangeTaskPosition,
	IChangeTaskPositionData,
	ICreateNewTask,
	IFetchTasks,
	INewTask,
	ISendRequest,
	ISetTasks
} from 'src/types/actions/taskActions.interface'
import { ITask } from 'src/types/stores/tasksStore.interface'

const changeTaskPositionAction = (positionData: IChangeTaskPositionData): IChangeTaskPosition => ({
	type: TasksActions.CHANGE_TASK_POSITION,
	payload: positionData
})

const fetchTasksAction = (boardId: string): IFetchTasks => ({
	type: TasksActions.FETCH_TASKS,
	payload: boardId
})

const setTasksAction = (tasks: ITask[]): ISetTasks => ({
	type: TasksActions.SET_TASKS,
	payload: tasks
})

const createTaskAction = (task: INewTask): ICreateNewTask => ({
	type: TasksActions.CREATE_NEW_TASK,
	payload: task
})

const sendGetTasksRequestAction = (): ISendRequest => ({
	type: TasksActions.SEND_REQUEST
})

export { changeTaskPositionAction, setTasksAction, createTaskAction, sendGetTasksRequestAction, fetchTasksAction }
