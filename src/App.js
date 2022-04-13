import { Navigate, Route, Routes } from 'react-router-dom'
import SampleResume from './components/SampleResume'
import MainHeader from './layout/MainHeader'
import Contact from './pages/contact'
import Experience from './pages/experience'

function App() {
	return (
		<div>
			<MainHeader>
				<SampleResume />
				<Routes>
					<Route path='/' element = {<Navigate to = '/experience' />} />
					{/* <Route path='/contact' element={<Contact />} /> */}
					<Route path='/experience' element={<Experience />} />
				</Routes>
			</MainHeader>
		</div>
	)
}

export default App
