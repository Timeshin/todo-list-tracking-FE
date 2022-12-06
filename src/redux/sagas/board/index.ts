import { call, put, debounce, take, takeEvery } from '@redux-saga/core/effects'
import { createBoardAction, getBoardsAction, setFetchStatusPendingAction } from 'src/redux/actions/boardsActions'
import { ICreateNewBoard, IFetchSearchBoard } from 'src/types/actions/boardActions.interfaces'
import { IBoard } from 'src/types/stores/boardStore.interface'
import boardService from 'src/services/board.service'
import BoardActions from 'src/types/actions/boardActions.enum'

function* fetchBoards(searchValue?: string) {
	yield put(setFetchStatusPendingAction())

	const boards: IBoard[] = yield call(boardService.getBoards, searchValue)

	yield put(getBoardsAction(boards))
}

function* createBoard(boardData: Omit<IBoard, 'id'>) {
	const board: IBoard = yield call(boardService.createBoard, boardData)

	yield put(createBoardAction(board))
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
