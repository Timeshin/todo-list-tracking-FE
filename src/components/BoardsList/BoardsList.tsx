import { memo } from 'react'
import { useAppSelector } from 'src/hooks'
import { BoardItem, Loader } from 'src/components'

const BoardsList = () => {
	const { boards, isLoading } = useAppSelector(({ boardStore }) => boardStore)

	if (isLoading) return <Loader />

	return (
		<ul>
			{boards.map(({ companyName, createdDate, id, key }) => (
				<BoardItem key={id} id={id} companyName={companyName} createdDate={createdDate} companyNameKey={key} />
			))}
		</ul>
	)
}

export default memo(BoardsList)
