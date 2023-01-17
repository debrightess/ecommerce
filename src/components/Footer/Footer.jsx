import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className='logo'>
              <div>
                <h1 className='text-white'>Multimart</h1>
              </div>
            </div>
            <p className='footer__text mt-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              odio. Expedita magnam dolorem animi hic maiores laudantium
              eligendi reiciendis odio.
            </p>
          </Col>

          <Col lg='3' md='3' className='mb-4'>
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

          <Col lg='2' md='3' className='mb-4'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem clasName='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-map-pin-line'></i>
                  </span>
                  <p>123 Roseline, Denmark</p>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-phone-line'></i>
                  </span>
                  <p>+081234567890</p>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0'>
                  <span>
                    <i className='ri-mail-line'></i>
                  </span>
                  <p>example123@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className='footer__copyright'>
              Copyright @Mega Shop {year}. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
