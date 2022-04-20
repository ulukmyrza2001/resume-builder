import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import './localization/i18next'
import Loader from './components/UI/Loader'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Suspense fallback={<Loader />}>
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
   </Suspense>
)
