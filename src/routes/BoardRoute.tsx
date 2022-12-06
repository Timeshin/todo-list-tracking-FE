import { useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router'
import { BoardTasksList } from 'src/components'
import { useAppDispatch } from 'src/hooks'
import { fetchTasksAction } from 'src/redux/actions/tasksActions'

const columns = ['Queue', 'Development', 'Done']

const BoardRoute = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const location = useLocation()
	const params = useParams<{ boardId: string }>()
	const companyName = location.state.company as string

	useEffect(() => {
		if (!params.boardId) return

		dispatch(fetchTasksAction(params.boardId))
	}, [dispatch, params.boardId])

	const onGoBackHandler = () => {
		navigate(-1)
	}

	return (
		<div className='board__page'>
			<h4 className='board__page__back__btn' onClick={onGoBackHandler}>
				Go back
			</h4>
			<h4 className='board__page__logo'>{companyName}</h4>
			<div className='board__page__content'>
				{columns.map((column) => (
					<div key={column} className='board__page__content__column'>
						<header className='board__page__content__column__title'>{column}</header>
						<hr />
						<div className='board__page__content__column__content'>
							<BoardTasksList />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default BoardRoute
