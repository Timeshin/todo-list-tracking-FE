import { ChangeEvent, useEffect, useState } from 'react'
import { BoardsList, Button, CreateBoardModal, Input } from 'src/components'
import { useAppDispatch } from 'src/hooks'
import { fetchBoardsAction, fetchSearchBoardsAction } from 'src/redux/actions/boardsActions'
import { openCreateBoardModal } from 'src/redux/actions/modalsActions'

const MainRoute = () => {
	const dispatch = useAppDispatch()
	const [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		dispatch(fetchBoardsAction())
	}, [dispatch])

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)

		dispatch(fetchSearchBoardsAction(e.target.value))
	}

	const onOpenModalHandler = () => {
		dispatch(openCreateBoardModal())
	}

	return (
		<div className='main__page'>
			<header className='header'>
				<Input placeholder='Search board' onChange={onChangeHandler} value={searchValue} />
				<Button onClick={onOpenModalHandler} type='button' value='Create new board' />
			</header>
			<BoardsList />
			<CreateBoardModal />
		</div>
	)
}

export default MainRoute
