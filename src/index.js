import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './localization/i18next'
import Loader from './components/UI/Loader'

ReactDOM.render(
	<Suspense fallback={<Loader />}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</Suspense>,
	document.getElementById('root'),
)
