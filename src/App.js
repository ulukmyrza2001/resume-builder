import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import SampleResume from './components/SampleResume'
import MainHeader from './components/layout/MainHeader'
import Contact from './pages/contact'
import Experience from './pages/experience'
import Summary from './pages/summary'
import Education from './pages/education'
import Skills from './pages/skills'
import FinishPage from './pages/finishPage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resumeActions } from './store/resumeSlice'
import { getDataFromLocalStorage } from './utils/helpers/general'
import { useTranslation } from 'react-i18next'


function App() {
	const {pathname} = useLocation()
	const {i18n} = useTranslation()
	const dispatch = useDispatch()
	useEffect(()=>{
		const resumeData = getDataFromLocalStorage('resume')
		console.log(resumeData);
		dispatch(resumeActions.getDataFromLocalStorage(resumeData))
		i18n.changeLanguage(getDataFromLocalStorage('lang'))
	},[dispatch,i18n])
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
