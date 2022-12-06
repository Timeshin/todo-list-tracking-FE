import { call, put, takeEvery } from '@redux-saga/core/effects'
import { AxiosError } from 'axios'
import { setFetchErrorAction } from 'src/redux/actions/boardsActions'
import { sendGetTasksRequestAction, setTasksAction } from 'src/redux/actions/tasksActions'
import TaskService from 'src/services/task.service'
import TasksActions from 'src/types/actions/taskActions.enum'
import { IFetchTasks } from 'src/types/actions/taskActions.interface'
import { ITask } from 'src/types/stores/tasksStore.interface'

function* fetchTasks(boardId: string) {
	yield put(sendGetTasksRequestAction())

	try {
		const tasks: ITask[] = yield call(TaskService.getTasks, boardId)

		yield put(setTasksAction(tasks))
	} catch (error) {
		const errorMessage = (error as AxiosError<{ error: string }>).response?.data?.error || (error as AxiosError).message

		yield put(setFetchErrorAction(errorMessage))
	}
}

function* loadTasksWatcher() {
	yield takeEvery(TasksActions.FETCH_TASKS, (actionProps: IFetchTasks) => fetchTasks(actionProps.payload))
}

export { loadTasksWatcher }
