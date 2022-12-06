import { call, spawn, all, put } from '@redux-saga/core/effects'
import { setFetchErrorAction } from '../actions/boardsActions'
import { AxiosError } from 'axios'
import { loadSearchBoardsWatcher, loadBoardsWatcher, createBoardWatcher } from './board'

export default function* rootSaga(): any {
	const sagas = [loadSearchBoardsWatcher, loadBoardsWatcher, createBoardWatcher]

	const retrySagas = yield sagas.map((saga) =>
		spawn(function* () {
			while (true) {
				try {
					yield call(saga)

					break
				} catch (error) {
					const errorMessage = (error as AxiosError).message

					yield put(setFetchErrorAction(errorMessage))
					break
				}
			}
		})
	)

	yield all(retrySagas)
}
