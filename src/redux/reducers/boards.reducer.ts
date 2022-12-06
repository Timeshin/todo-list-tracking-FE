import { IBoard } from 'src/types/stores/boardStore.interface'
import BoardActions from 'src/types/actions/boardActions.enum'
import type { BoardReducerActions } from 'src/types/actions/boardActions.interfaces'

interface IInitialBoardState {
	boards: IBoard[]
	isLoading: boolean
	error: string | null
}

const initialState: IInitialBoardState = {
	boards: [],
	isLoading: true,
	error: null
}

const boardReducer = (state = initialState, action: BoardReducerActions): IInitialBoardState => {
	switch (action.type) {
		case BoardActions.GET_BOARDS:
			return {
				...state,
				boards: action.payload,
				isLoading: false
			}
		case BoardActions.CREATE_NEW_BOARD:
			return {
				...state,
				boards: [...state.boards, action.payload],
				isLoading: false
			}
		case BoardActions.DELETE_BOARD:
			return {
				...state,
				boards: action.payload,
				isLoading: false
			}
		case BoardActions.FETCHING_DATA:
			return {
				...state,
				isLoading: true
			}
		case BoardActions.SET_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default boardReducer
