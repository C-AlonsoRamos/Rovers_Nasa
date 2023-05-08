
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BaseLayout from './Layouts/BaseLayout/BaseLayout'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import PhotoDay from './pages/PhotoDay/PhotoDay'
import Rovers from './pages/Rovers/Rovers'
import About from './pages/About/About'

const App = () => {
  return (
    
     <BaseLayout>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/photoDay' element={<PhotoDay/>} />
        <Route path='/rovers' element={<Rovers/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
     </BaseLayout>
  
  )
}

export default App
