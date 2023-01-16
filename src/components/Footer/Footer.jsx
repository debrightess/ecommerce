import React from 'react'
import './footer.css'
import logo from '../../assets/images/eco-logo.png'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className='logo'>
              <img src={logo} alt='' />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <p className='footer__text mt-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              odio. Expedita magnam dolorem animi hic maiores laudantium
              eligendi reiciendis odio.
            </p>
          </Col>
          <Col lg='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem clasName='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Contact</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem clasName='ps-0 border-0'>
                  <span>
                    <i className='ri-map-pin-line'></i>
                  </span>
                  <p>123 Roseline, Denmark</p>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3'></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
