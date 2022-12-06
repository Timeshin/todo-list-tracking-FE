import { TaskReducerActions } from 'src/types/actions/taskActions.interface'
import TasksActions from 'src/types/actions/taskActions.enum'
import { ITask } from 'src/types/stores/tasksStore.interface'

interface IInitialTasksState {
	tasks: ITask[]
	isLoading: boolean
}

const initialState: IInitialTasksState = {
	tasks: [],
	isLoading: false
}

const tasksReducer = (state = initialState, action: TaskReducerActions): IInitialTasksState => {
	switch (action.type) {
		case TasksActions.SET_TASKS:
			return {
				isLoading: false,
				tasks: action.payload
			}
		case TasksActions.SEND_REQUEST:
			return {
				...state,
				isLoading: true
			}
		default:
			return state
	}
}

export default tasksReducer
