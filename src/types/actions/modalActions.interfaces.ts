import { IErrorModalData } from '../stores/modalStore.interface'
import ModalActions from './modalActions.enum'

export interface IOpenCreateBoardModal {
	type: ModalActions.OPEN_CREATE_BOARD_MODAL
}

export interface IOpenCreateTaskModal {
	type: ModalActions.OPEN_CREATE_TASK_MODAL
}

export interface IOpenErrorModal {
	type: ModalActions.OPEN_ERROR_MODAL
	payload: IErrorModalData
}

export interface ICloseModals {
	type: ModalActions.CLOSE_MODALS
}

type ModalsReducerActions = IOpenCreateBoardModal | IOpenCreateTaskModal | IOpenErrorModal | ICloseModals

export type { ModalsReducerActions }
