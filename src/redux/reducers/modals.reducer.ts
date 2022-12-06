import ModalActions from 'src/types/actions/modalActions.enum'
import { ModalsReducerActions } from 'src/types/actions/modalActions.interfaces'
import { IErrorModalData } from 'src/types/stores/modalStore.interface'

interface IInitialModalState {
	isCreateBoardModalOpened: boolean
	isErrorModalOpened: boolean
	isCreateTaskModalOpened: boolean
	errorModalData: IErrorModalData | null
}

const initialState: IInitialModalState = {
	isCreateBoardModalOpened: false,
	isErrorModalOpened: false,
	isCreateTaskModalOpened: false,
	errorModalData: null
}

const modalsReducer = (state = initialState, action: ModalsReducerActions): IInitialModalState => {
	switch (action.type) {
		case ModalActions.OPEN_CREATE_BOARD_MODAL:
			return {
				...state,
				isCreateBoardModalOpened: true
			}
		case ModalActions.OPEN_CREATE_TASK_MODAL:
			return {
				...state,
				isCreateTaskModalOpened: false
			}
		case ModalActions.OPEN_ERROR_MODAL:
			return {
				...state,
				isErrorModalOpened: true,
				errorModalData: action.payload
			}
		case ModalActions.CLOSE_MODALS:
			return {
				isCreateBoardModalOpened: false,
				isCreateTaskModalOpened: false,
				isErrorModalOpened: false,
				errorModalData: null
			}
		default:
			return state
	}
}

export default modalsReducer
