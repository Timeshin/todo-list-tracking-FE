import { useAppSelector } from 'src/hooks'
import { Loader } from 'src/components'

const BoardTasksList = () => {
	const { tasks, isLoading } = useAppSelector(({ tasksStore }) => tasksStore)

	if (isLoading) return <Loader />

	return <div>BoardTasksList</div>
}

export default BoardTasksList
