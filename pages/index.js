import { Row, Card, Col, Button, Container } from 'react-bootstrap'
import products from './productList.json'
import Link from 'next/link'


export default function Home() {
  return (
   <Row>
     <Container>
       {
         products.map(product => (
           <Row style={{border: '1px solid #ccc', borderRadius: 3}} className="my-3 p-3" key={product.ProductID}>
              <Col md={3}>
                <img src={product.ThumbnailURL} alt={product.Name}></img>
              </Col>
              <Col md={6} className="d-flex align-items-center">
                <Row>
                  <Col md={12}>
                    <h3>{product.Name}</h3>
                  </Col>
                  <Col md={12}>
                    <p>${product.Price}</p>
                  </Col>
                </Row>
              </Col>
              <Col md={3} className="d-flex justify-content-center align-items-center">
                <Link href={`/${product.ProductID}`}>
                  <Button variant="success">View more details</Button>
                </Link>
              </Col>
           </Row>
         ))
       }
     </Container>
   </Row>
  )
}
