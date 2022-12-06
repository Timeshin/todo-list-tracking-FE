import { ChangeEvent, FormEvent, memo, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { Button, Input } from 'src/components'
import { closeModals } from 'src/redux/actions/modalsActions'

import classes from './CreateBoardModal.module.scss'
import { IBoard } from 'src/types/stores/boardStore.interface'
import getCompanyKey from 'src/utils/getCompanyKey'
import dayjs from 'dayjs'
import { sendRequestCreateBoardAction } from 'src/redux/actions/boardsActions'

const CreateBoardModal = () => {
	const isCreateBoardModalOpened = useAppSelector(({ modalStore }) => modalStore.isCreateBoardModalOpened)
	const dispatch = useAppDispatch()
	const [value, setValue] = useState('')
	const [error, setError] = useState(false)

	useEffect(() => {
		if (isCreateBoardModalOpened) document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isCreateBoardModalOpened])

	const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
		if (target.value.length > 25) return

		setValue(target.value)
		setError(false)
	}

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!value.trim() || value.trim().length < 3) {
			setError(true)
			return
		}

		const boardData: Omit<IBoard, 'id'> = {
			companyName: value,
			key: getCompanyKey(value),
			createdDate: dayjs().format()
		}

		dispatch(sendRequestCreateBoardAction(boardData))
		dispatch(closeModals())
		setValue('')
		setError(false)
	}

	const onCancelHandler = () => {
		dispatch(closeModals())
		setValue('')
		setError(false)
	}

	if (!isCreateBoardModalOpened) return null

	return (
		<div className={classes.modalWrapper}>
			<div className={classes.modalContent} onMouseDown={(e) => e.stopPropagation()}>
				<form action='POST' onSubmit={onSubmitHandler}>
					<Input
						placeholder='Company name'
						className={error ? classes.error : ''}
						onChange={onChangeHandler}
						value={value}
					/>

					<div className={classes.formActions}>
						<Button onClick={onCancelHandler} value='Cancel' />
						<Button type='submit' value='Create' />
					</div>
				</form>
			</div>
		</div>
	)
}

export default memo(CreateBoardModal)
