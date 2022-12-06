import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PagesLayout } from './layouts'
import { Loader } from './components'
const MainRoute = lazy(() => import('src/routes/MainRoute'))
const BoardRoute = lazy(() => import('src/routes/BoardRoute'))

import 'src/styles/app.scss'

const App = () => (
	<Routes>
		<Route path='/' element={<PagesLayout />}>
			<Route
				index
				element={
					<Suspense fallback={<Loader />}>
						<MainRoute />
					</Suspense>
				}
			/>
			<Route
				path=':boardId'
				element={
					<Suspense fallback={<Loader />}>
						<BoardRoute />
					</Suspense>
				}
			/>

			<Route path='*' element={<MainRoute />} />
		</Route>
	</Routes>
)

export default App
