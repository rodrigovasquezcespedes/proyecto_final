import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { TecnoContext } from '../context/TecnoContext'
import { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { FaUser, FaShoppingCart, FaStore, FaHeart, FaHome } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Navigation = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  const { carrito, formatPrice } = useContext(TecnoContext)
  const total = carrito.reduce(
    (acumulador, valorActual) => acumulador + valorActual.precio * valorActual.count, 0
  )

  const formattedTotal = formatPrice(total)

  const handleMenu = ({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'

  const [navbarClass, setNavbarClass] = useState('navbar-custom')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarClass('navbar-custom shrink')
      } else {
        setNavbarClass('navbar-custom')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Navbar expand='lg' bg='dark' data-bs-theme='dark' className={`${navbarClass} sticky-top`}>
        <Container>
          <NavLink className={handleMenu} to='/'>
            <Navbar.Brand>
              <img
                src={logo}
                alt='Logo'
                width='60'
                height='60'
                className='d-inline-block align-top'
              />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink className={handleMenu} to='/'><FaHome /></NavLink>
              {isAuthenticated
                ? (
                  <>
                    <NavLink className={handleMenu} to='/productos'><FaStore /></NavLink>
                    <NavLink className={handleMenu} to='/profile'><FaUser /></NavLink>
                    <NavLink className={handleMenu} to='/favoritos'><FaHeart /></NavLink>
                    <NavLink className={handleMenu} to='/carrito'><FaShoppingCart />{formattedTotal}</NavLink>
                    <NavLink>
                      <Button
                        className='ms-2 px-3'
                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                        variant='light'
                      >Logout
                      </Button>
                    </NavLink>
                  </>
                  )
                : (
                  <NavLink>
                    <Button
                      className='ms-2 px-3'
                      onClick={() => loginWithRedirect()}
                      variant='light'
                    >
                      Login
                    </Button>
                  </NavLink>
                  )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
