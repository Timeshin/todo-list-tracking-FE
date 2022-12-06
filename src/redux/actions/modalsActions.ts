import ModalActions from 'src/types/actions/modalActions.enum'
import {
	ICloseModals,
	IOpenCreateBoardModal,
	IOpenCreateTaskModal,
	IOpenErrorModal
} from 'src/types/actions/modalActions.interfaces'
import { IErrorModalData } from 'src/types/stores/modalStore.interface'

const openCreateBoardModal = (): IOpenCreateBoardModal => ({
	type: ModalActions.OPEN_CREATE_BOARD_MODAL
})

const openCreateTaskModal = (): IOpenCreateTaskModal => ({
	type: ModalActions.OPEN_CREATE_TASK_MODAL
})

const openErrorModal = (modalData: IErrorModalData): IOpenErrorModal => ({
	type: ModalActions.OPEN_ERROR_MODAL,
	payload: modalData
})

const closeModals = (): ICloseModals => ({
	type: ModalActions.CLOSE_MODALS
})

export { openCreateBoardModal, openCreateTaskModal, openErrorModal, closeModals }
