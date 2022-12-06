import { ChangeEvent, FormEvent, memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { closeModals } from 'src/redux/actions/modalsActions'
import { IBoard } from 'src/types/stores/boardStore.interface'
import { sendRequestCreateBoardAction } from 'src/redux/actions/boardsActions'
import dayjs from 'dayjs'
import getCompanyKey from 'src/utils/getCompanyKey'

import { Button, Input } from 'src/components'
import ModalWrapper from '../ModalWrapper/ModalWrapper'

import classes from './CreateBoardModal.module.scss'

const CreateBoardModal = () => {
	const isCreateBoardModalOpened = useAppSelector(({ modalStore }) => modalStore.isCreateBoardModalOpened)
	const dispatch = useAppDispatch()
	const [value, setValue] = useState('')
	const [error, setError] = useState(false)

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
		<ModalWrapper>
			<form action='POST' onSubmit={onSubmitHandler}>
				<Input placeholder='Company name' className={error ? classes.error : ''} onChange={onChangeHandler} value={value} />

				<div className={classes.formActions}>
					<Button onClick={onCancelHandler} value='Cancel' />
					<Button type='submit' value='Create' />
				</div>
			</form>
		</ModalWrapper>
	)
}

export default memo(CreateBoardModal)
