import { Card, Row, Container, Button } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import Testimonials from '../components/Testimonials'
import Banners from '../components/Banners'

const Home = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <>
      <Card className='col-12'>
        <Card.Img variant='top' src='https://framerusercontent.com/images/NmbCyFQg0KGfOurDReOCcuWcT0A.png' />
      </Card>

      <Banners />

      <Container className='mt-5'>
        <Row>
          <Card style={{ height: '10rem' }}>
            <Card.Body className='d-flex justify-content-between align-items-center px-4'>
              <div className='d-flex align-items-center gap-3'>
                <p><i class='fa-solid fa-user fa-3x' /></p>
                <Card.Title>Inicia sesión para mejorar tu experiencia de compra</Card.Title>
              </div>
              <div>
                <Button
                  className='ms-2 px-5'
                  onClick={() => {
                    loginWithRedirect()
                  }} variant='dark'
                >Login
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>

      <Testimonials />

      <Container className='mt-5'>
        <Row>
          <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-3'>
            <Card style={{ height: '20rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                <p><i class='fa-solid fa-truck fa-3x' /></p>
                <Card.Title>Despacho gratis</Card.Title>
                <Card.Text>Por compras superiores $50.000</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-3'>
            <Card style={{ height: '20rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                <p><i class='fa-solid fa-location-dot fa-3x' /></p>
                <Card.Title>Seguimiento</Card.Title>
                <Card.Text>Sigue tus pedidos</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-3'>
            <Card style={{ height: '20rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                <p><i class='fa-solid fa-bag-shopping fa-3x' /></p>
                <Card.Title>Mis compras</Card.Title>
                <Card.Text>Haz seguimiento de tus compras</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-3'>
            <Card style={{ height: '20rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                <p><i class='fa-solid fa-credit-card fa-3x' /></p>
                <Card.Title>Pago Flexible</Card.Title>
                <Card.Text>Compra hasta en 24 cuotas</Card.Text>
              </Card.Body>
            </Card>
          </div>

        </Row>
      </Container>

    </>
  )
}

export default Home
