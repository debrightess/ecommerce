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
                <h1 className='text-white'>Phone-Gadgets Digital Store</h1>
              </div>
            </div>
            <p className='footer__text mt-4'>
              We are an Australian company that has been in the electronic
              retail sector for over 15years! We always aim to provide a variety
              of products at the best possible prices, with shipping and
              delivery times that are second to none.
            </p>
          </Col>

          <Col lg='3' md='3' className='mb-4'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem clasName='ps-0 border-0'>
                  <Link to='#'>console</Link>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0'>
                  <Link to='#'>Mobile</Link>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0'>
                  <Link to='#'>Laptop</Link>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0'>
                  <Link to='#'>Watches</Link>
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
                  <Link to='#'>About-Us</Link>
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

                {/* <ListGroupItem clasName='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-phone-line'></i>
                  </span>
                  <p>+081234567890</p>
                </ListGroupItem> */}

                <ListGroupItem clasName='ps-0 border-0'>
                  <span>
                    <i className='ri-mail-line'></i>
                  </span>
                  <p>info@phonedigitalstore.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className='footer__copyright'>
              Copyright @Phone Gadgets Digital Store {year}. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
