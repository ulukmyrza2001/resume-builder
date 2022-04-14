import { Navigate, Route, Routes } from 'react-router-dom'
import SampleResume from './components/SampleResume'
import MainHeader from './components/layout/MainHeader'
import Contact from './pages/contact'
import Experience from './pages/experience'
import Summary from './pages/summary'

function App() {
	return (
		<div>
			<MainHeader>
				<SampleResume />
				<Routes>
					<Route path='/' element = {<Navigate to = '/experience' />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/summary' element = {<Summary/>} />
				</Routes>
			</MainHeader>
		</div>
	)
}

export default App
