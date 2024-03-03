import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '@pages/Home'
import Test from '@pages/Test'
import CardPage from './pages/Card'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/card/:id" Component={CardPage} />
        <Route path="/test" Component={Test} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
