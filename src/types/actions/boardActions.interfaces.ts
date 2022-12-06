import BoardActions from './boardActions.enum'
import { IBoard } from '../stores/boardStore.interface'

export interface IGetBoard {
	type: BoardActions.GET_BOARDS
	payload: IBoard[]
}

export interface ICreateNewBoard {
	type: BoardActions.CREATE_NEW_BOARD
	payload: IBoard
}

export interface ISendRequestCreateNewBoard {
	type: BoardActions.CREATE_NEW_BOARD_REQUEST
	payload: Omit<IBoard, 'id'>
}

export interface IDeleteBoardAction {
	type: BoardActions.DELETE_BOARD
	payload: IBoard[]
}

export interface IFetchSearchBoard {
	type: BoardActions.FETCH_BOARDS_SEARCH
	payload: string
}

export interface IFetchBoard {
	type: BoardActions.FETCH_BOARDS
}

export interface IFetchData {
	type: BoardActions.FETCHING_DATA
}

export interface ISetError {
	type: BoardActions.SET_ERROR
	payload: string | null
}

type BoardReducerActions =
	| IGetBoard
	| ICreateNewBoard
	| ISendRequestCreateNewBoard
	| IDeleteBoardAction
	| IFetchData
	| IFetchBoard
	| IFetchSearchBoard
	| ISetError

export type { BoardReducerActions }
