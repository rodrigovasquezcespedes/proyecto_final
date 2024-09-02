import { Container, Row, Button } from 'react-bootstrap'
import { useTecnoContext } from '../context/TecnoContext'
import { useNavigate } from 'react-router-dom'

const Shopping = () => {
  const navigate = useNavigate()
  const { carrito, incrementar, decrementar, formatPrice } = useTecnoContext()

  // Suma total sin formatear
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.count, 0
  )

  return (
    <Container className='my-5'>
      <Row className='shadow body-tertiary rounde p-3'>
        <h2 className='mt-5'>Detalle pedido</h2>
        {
          carrito.map((product, index) => (
            <div key={product.id} className='d-flex flex-column flex-md-row'>
              <div className='col-6 p-3 d-flex gap-5 align-items-center'>
                <img src={product.img} width={200} alt='' />
                <p>{product.nombre}</p>
              </div>
              <div className='col-6 p-3 d-flex justify-content-center align-items-center gap-3'>
                {/* Precio formateado */}
                <p>{formatPrice(product.precio)}</p>
                <Button onClick={() => incrementar(index)} variant='primary'>+</Button>
                <p>{product.count}</p>
                <Button onClick={() => decrementar(index)} variant='primary'>-</Button>
              </div>
            </div>
          ))
        }
        <Row className='my-5'>
          {/* Total formateado */}
          <h4 className='mb-4'>Total: {formatPrice(total)}</h4>
          <div className='d-flex gap-2'>
            <Button onClick={() => navigate('/productos')} variant='primary'>Seguir comprando</Button>
            <Button variant='primary'>Finalizar compra</Button>
          </div>
        </Row>
      </Row>
    </Container>
  )
}

export default Shopping
