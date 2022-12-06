import { FC } from 'react'
import { useNavigate } from 'react-router'
import { IBoard } from 'src/types/stores/boardStore.interface'
import { convertDateToString } from 'src/utils'

import classes from './BoardItem.module.scss'

type IBoardItem = Omit<IBoard, 'key'> & { companyNameKey: string }

const BoardItem: FC<IBoardItem> = ({ companyName, companyNameKey, createdDate, id }) => {
	const navigate = useNavigate()

	const onClickHandler = () => {
		navigate(id)
	}

	return (
		<li className={classes.boardItem} onClick={onClickHandler}>
			<div className={classes.boardItemCol}>
				<h5>Name</h5>
				<p>{companyName}</p>
			</div>
			<div className={classes.boardItemCol}>
				<h5>Key</h5>
				<p>{companyNameKey}</p>
			</div>
			<div className={classes.boardItemCol}>
				<h5>Created date</h5>
				<p>{convertDateToString(createdDate)}</p>
			</div>
		</li>
	)
}

export default BoardItem
