import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import SampleResume from './components/SampleResume'
import MainHeader from './components/layout/MainHeader'
import Contact from './pages/contact'
import Experience from './pages/experience'
import Summary from './pages/summary'
import Education from './pages/education'
import Skills from './pages/skills'
import FinishPage from './pages/finishPage'


function App() {
	const {pathname} = useLocation()
	return (
		<div>
			<MainHeader>
				{pathname !== '/finish' && <SampleResume />}
				<Routes>
					<Route path='/' element = {<Navigate to = '/contact' />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/education' element = {<Education/>} />
					<Route path='/skills' element = {<Skills/>}/>
					<Route path='/summary' element = {<Summary/>} />
					<Route path='/finish' element = {<FinishPage/>} />
				</Routes>
			</MainHeader>
		</div>
	)
}

export default App
