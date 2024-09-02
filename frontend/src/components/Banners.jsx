import { Card, Row, Container, Col } from 'react-bootstrap'
const Banners = () => {
  return (
    <>
      <h2 className='container my-5 text-center'>Tenemos lo último en tecnología</h2>

      <Container className='mt-5'>
        <Row>
          <div className='col-12 col-md-6 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Row className='g-0'>
                <Col className='col-md-8'>
                  <Card.Img className='img-fluid rounded-start' src='https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/support/laptop-user-guide/img/laptop.png' />
                </Col>
                <Col className='col-md-4'>
                  <Card.Body>
                    <Card.Title>Notebooks</Card.Title>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>

          <div className='col-12 col-md-6 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Row className='g-0'>
                <Col className='col-md-8'>
                  <Card.Img className='img-fluid rounded-start' src='https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/support/laptop-user-guide/img/laptop.png' />
                </Col>
                <Col className='col-md-4'>
                  <Card.Body>
                    <Card.Title>Celulares</Card.Title>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>

        </Row>
      </Container>

      <Container className='mt-5'>
        <Row>
          <div className='col-12 col-sm-4 col-md-4 col-lg-4 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Card.Body>
                <Card.Img src='https://assets.bosecreative.com/transform/607a7626-aaae-4e62-92e7-c2492622c6a5/QCHLE25_BlueDusk_001_RightFacing_RGB?quallity=100&io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit' width='200px' alt='' />
                <Card.Title>Televisores</Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-sm-4 col-md-4 col-lg-4 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Card.Body>
                <Card.Img src='https://assets.bosecreative.com/transform/607a7626-aaae-4e62-92e7-c2492622c6a5/QCHLE25_BlueDusk_001_RightFacing_RGB?quallity=100&io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit' width='200px' alt='' />
                <Card.Title>Audio</Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-sm-4 col-md-4 col-lg-4 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Card.Body>
                <Card.Img src='https://www.canontiendaonline.cl/wcsstore/CCHCatalogAssetStore/pro_clens_eos5d_markiv_ef24_105usm_01.jpg' width='200px' alt='' />
                <Card.Title>Cámaras</Card.Title>
              </Card.Body>
            </Card>
          </div>

        </Row>
      </Container>
    </>
  )
}

export default Banners
