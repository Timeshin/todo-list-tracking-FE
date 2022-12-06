import BoardActions from 'src/types/actions/boardActions.enum'
import {
	ICreateNewBoard,
	IDeleteBoardAction,
	IFetchBoard,
	IFetchData,
	IFetchSearchBoard,
	IGetBoard,
	ISendRequestCreateNewBoard,
	ISetError
} from 'src/types/actions/boardActions.interfaces'
import { IBoard } from 'src/types/stores/boardStore.interface'

const getBoardsAction = (boards: IBoard[]): IGetBoard => ({
	type: BoardActions.GET_BOARDS,
	payload: boards
})

const createBoardAction = (board: IBoard): ICreateNewBoard => ({
	type: BoardActions.CREATE_NEW_BOARD,
	payload: board
})

const sendRequestCreateBoardAction = (board: Omit<IBoard, 'id'>): ISendRequestCreateNewBoard => ({
	type: BoardActions.CREATE_NEW_BOARD_REQUEST,
	payload: board
})

const deleteBoardAction = (boards: IBoard[]): IDeleteBoardAction => ({
	type: BoardActions.DELETE_BOARD,
	payload: boards
})

const fetchBoardsAction = (): IFetchBoard => ({
	type: BoardActions.FETCH_BOARDS
})

const fetchSearchBoardsAction = (searchValue: string): IFetchSearchBoard => ({
	type: BoardActions.FETCH_BOARDS_SEARCH,
	payload: searchValue
})

const setFetchStatusPendingAction = (): IFetchData => ({
	type: BoardActions.FETCHING_DATA
})

const setFetchErrorAction = (error: string): ISetError => ({
	type: BoardActions.SET_ERROR,
	payload: error
})

export {
	getBoardsAction,
	createBoardAction,
	sendRequestCreateBoardAction,
	deleteBoardAction,
	setFetchErrorAction,
	fetchBoardsAction,
	fetchSearchBoardsAction,
	setFetchStatusPendingAction
}
