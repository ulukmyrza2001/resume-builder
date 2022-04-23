import { useLocation } from 'react-router-dom'
import SampleResume from './components/templateResume/SampleResume'
import MainHeader from './components/layout/MainHeader'
import AppRoutes from './routes/AppRoutes'

function App() {
   const { pathname } = useLocation()
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
