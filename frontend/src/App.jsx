import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import { Home, Profile, NotFound, Shopping, Products, Detail, Favorites } from './views'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/productos/:id' element={<Detail />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/favoritos' element={<Favorites />} />
        <Route path='/carrito' element={<Shopping />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
