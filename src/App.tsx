import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CardPage from '@pages/Card'
import Home from '@pages/Home'
import SigninPage from '@pages/Signin'
import SignupPage from '@pages/Signup'
import Test from '@pages/Test'
import ScrollToTop from '@shared/ScrollToTop'
import NavBar from './components/shared/NavBar'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signin" Component={SigninPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/card/:id" Component={CardPage} />
        <Route path="/test" Component={Test} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
