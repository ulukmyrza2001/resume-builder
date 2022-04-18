import SampleResume from './components/templateResume/SampleResume'
import MainHeader from './components/layout/MainHeader'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resumeActions } from './store/resumeSlice'
import { getDataFromLocalStorage } from './utils/helpers/general'
import { useTranslation } from 'react-i18next'
import AppRoutes from './routes/AppRoutes'
import { useLocation } from 'react-router-dom'

function App() {
	const { pathname } = useLocation()
	const { i18n } = useTranslation()
	const dispatch = useDispatch()
	console.log('expample');
	useEffect(() => {
		const resumeData = getDataFromLocalStorage('resume')
		dispatch(resumeActions.getDataFromLocalStorage(resumeData))
		i18n.changeLanguage(getDataFromLocalStorage('lang'))
	}, [dispatch, i18n])
	
	return (
		<div>
			<MainHeader>
				{pathname !== '/finish' && <SampleResume />}
				<AppRoutes />
			</MainHeader>
		</div>
	)
}

export default App
