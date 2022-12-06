import { spawn, all } from '@redux-saga/core/effects'
import { loadSearchBoardsWatcher, loadBoardsWatcher, createBoardWatcher } from './board/board'
import { loadTasksWatcher } from './task/task'

export default function* rootSaga(): any {
	yield all([spawn(loadSearchBoardsWatcher), spawn(loadBoardsWatcher), spawn(createBoardWatcher), spawn(loadTasksWatcher)])
}
