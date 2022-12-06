import { FC, ReactNode, useEffect } from 'react'
import { useAppSelector } from 'src/hooks'
import classes from './ModalWrapper.module.scss'

interface IModalWrapper {
	children: ReactNode
}

const ModalWrapper: FC<IModalWrapper> = ({ children }) => {
	const { isCreateBoardModalOpened, isErrorModalOpened, isCreateTaskModalOpened } = useAppSelector(
		({ modalStore }) => modalStore
	)

	useEffect(() => {
		if (isCreateBoardModalOpened || isErrorModalOpened || isCreateTaskModalOpened) document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isCreateBoardModalOpened, isCreateTaskModalOpened, isErrorModalOpened])

	return (
		<div className={classes.modalWrapper}>
			<div className={classes.modalContent} onMouseDown={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default ModalWrapper
