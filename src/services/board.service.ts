import fetchInstance from 'src/config/fetchInstance'
import { IBoard } from 'src/types/stores/boardStore.interface'
import { AxiosInstance } from 'axios'

class BoardService {
	private readonly apiInstance: AxiosInstance

	constructor(api: AxiosInstance) {
		this.apiInstance = api
	}

	getBoards = async (searchValue?: string) => {
		const { data } = await this.apiInstance.get<IBoard[]>('/boards', {
			params: {
				search: searchValue
			}
		})

		return data
	}

	createBoard = async (boardData: Omit<IBoard, 'id'>) => {
		const { data } = await this.apiInstance.post<IBoard>('/boards', boardData)

		return data
	}
}

export default new BoardService(fetchInstance)
