import { call, put, debounce, take, takeEvery } from '@redux-saga/core/effects'
import {
	createBoardAction,
	getBoardsAction,
	setFetchErrorAction,
	setFetchStatusPendingAction
} from 'src/redux/actions/boardsActions'
import { ICreateNewBoard, IFetchSearchBoard } from 'src/types/actions/boardActions.interfaces'
import { IBoard } from 'src/types/stores/boardStore.interface'
import BoardService from 'src/services/board.service'
import BoardActions from 'src/types/actions/boardActions.enum'
import { AxiosError } from 'axios'

function* fetchBoards(searchValue?: string) {
	yield put(setFetchStatusPendingAction())
	try {
		const boards: IBoard[] = yield call(BoardService.getBoards, searchValue)

		yield put(getBoardsAction(boards))
	} catch (error) {
		const errorMessage = (error as AxiosError<{ error: string }>).response?.data?.error || (error as AxiosError).message

		yield put(setFetchErrorAction(errorMessage))
	}
}

function* createBoard(boardData: Omit<IBoard, 'id'>) {
	try {
		const board: IBoard = yield call(BoardService.createBoard, boardData)

		yield put(createBoardAction(board))
	} catch (error) {
		const errorMessage = (error as AxiosError<{ error: string }>).response?.data?.error || (error as AxiosError).message

		yield put(setFetchErrorAction(errorMessage))
	}
}

function* loadBoardsWatcher() {
	yield take(BoardActions.FETCH_BOARDS)

	yield call(fetchBoards)
}

function* loadSearchBoardsWatcher() {
	yield debounce(500, BoardActions.FETCH_BOARDS_SEARCH, (actionProps: IFetchSearchBoard) =>
		fetchBoards(actionProps?.payload)
	)
}

function* createBoardWatcher() {
	yield takeEvery(BoardActions.CREATE_NEW_BOARD_REQUEST, (actionProps: ICreateNewBoard) => createBoard(actionProps.payload))
}

export { loadSearchBoardsWatcher, loadBoardsWatcher, createBoardWatcher }
