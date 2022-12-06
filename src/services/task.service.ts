import fetchInstance from 'src/config/fetchInstance'
import { ITask } from 'src/types/stores/tasksStore.interface'
import { AxiosInstance } from 'axios'

class TaskService {
	private readonly apiInstance: AxiosInstance

	constructor(api: AxiosInstance) {
		this.apiInstance = api
	}

	getTasks = async (boardId: string) => {
		const { data } = await this.apiInstance.get<ITask[]>('/tasks', {
			params: {
				boardId
			}
		})

		return data
	}
}

export default new TaskService(fetchInstance)
