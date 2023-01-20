import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/cart.css'

import tdImg from '../assets/images/arm-chair-01.jpg'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)

  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />

      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length === 0 ? (
                <h2 className='fs-4 text-center'>Not item added to the cart</h2>
              ) : (
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <img src={tdImg} alt='' />
                      </td>
                      <td>Modern Arm Chair</td>
                      <td>$299</td>
                      <td>2px</td>
                      <td>
                        <i className='ri-delete-bin-line'></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg='3'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Cart
