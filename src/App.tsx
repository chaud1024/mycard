import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '@pages/Home'
import Test from '@pages/Test'
import ScrollToTop from '@shared/ScrollToTop'
import CardPage from './pages/Card'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/card/:id" Component={CardPage} />
        <Route path="/test" Component={Test} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
