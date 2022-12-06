import { Outlet } from 'react-router-dom'
import { useAppDispatch } from 'src/hooks'
import { closeModals } from 'src/redux/actions/modalsActions'
import classes from './PagesLayout.module.scss'

const PagesLayout = () => {
	const dispatch = useAppDispatch()

	const onCloseModalHandler = () => {
		dispatch(closeModals())
	}

	return (
		<div className={classes.wrapper} onMouseDown={onCloseModalHandler}>
			<div className={classes.content}>
				<Outlet />
			</div>
		</div>
	)
}

export default PagesLayout
