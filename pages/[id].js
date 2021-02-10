import products from './productList.json'
import { Button, Row, Col, Container } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import style from '../styles/ProductDetails.module.css'

function ProductDetails ({ productId }) {
  const product = products.find(product => product.ProductID == productId)

  return (
    <Row>
      <Container>
      <Row style={{border: '1px solid #ccc', borderRadius: 3}} className="my-3 p-3" key={product.ProductID}>
          <Col md={4}>
            <figure className={style.productFigure}>
              <img style={{width: '100%'}} src={product.PictureURL} alt={product.Name}></img>
              <figcaption className="d-flex justify-content-center align-items-center">
                <label className="badge badge-pill badge-danger">Clearence</label>
                <label className="badge badge-pill badge-danger ml-3">Free Shipping</label>
              </figcaption>
            </figure>
          </Col>
          <Col md={5}>
            <Row>
              <Col md={12}>
                <h3>{product.Name}</h3>
              </Col>
              <Col md={12} className="mb-3">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </Col>
              <Col md={12}>
                <p>{product.Description}</p>
              </Col>
            </Row>
          </Col>
          <Col md={3} className="d-flex flex-column justify-content-between">
            <div className={style.priceDetails}>
              <h1>${product.Price}</h1>
              {
                product.Price < product['Retail Price'] && (<p>${product['Retail Price']}</p>)
              }
            </div>
            <Row className="d-flex flex-column justify-content-end">
              {product.Stock == 0 && (<h4 className="text-danger text-center">Out of stock</h4>)}
              {product.Stock > 0 && (<Button variant="success">Add to cart</Button>)}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={3} style={{fontWeight: 'bolder', color: '#888'}}>
            <p>Brand: {product.Brand}</p>
            <p>Color: {product.Color}</p>
          </Col>
        </Row>
      </Container>
    </Row>
  )
}

export function getServerSideProps (ctx) {
  return {props: {productId: ctx.params.id}}
}

export default ProductDetails