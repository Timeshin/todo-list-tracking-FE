import modalsReducer from './modals.reducer'
import boardReducer from './boards.reducer'
import tasksReducer from './tasks.reducer'

export const stores = {
	modalStore: modalsReducer,
	boardStore: boardReducer,
	tasksStore: tasksReducer
}
