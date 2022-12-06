export interface IComments {
	id: string
	message: string
	replyComments: IComments[]
}

export interface ITaskData {
	description: string
	createdDate: string
	assets: string[]
	comments: IComments[]
}

export interface ITask {
	id: string
	title: string
	taskNumber: number
	priority: number
	status: string
	data: ITaskData
}
