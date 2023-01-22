import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
// import aboutImg from '../assests/images/about-us.png'
import aboutImg from '../assets/images/play-station.jpg'
// import CountUp from 'react-countup'

import '../styles/about.css'

const About = () => {
  return (
    <Helmet title='About-Us'>
      <CommonSection title='About-Us' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='about__img'>
                <img src={aboutImg} alt='' className='w-100' />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='about__content'>
                <p>
                  We are an Australian company that has been in the electronic
                  retail sector for over 15years! We always aim to provide a
                  variety of products at the best possible prices, with shipping
                  and delivery times that are second to none.
                </p>
                <p>
                  Our strength in business comes from our will to satisfy our
                  customers. Our range mainly consists of electrical consumer
                  products, and gadgets. we are always working to extend our
                  product base to a wider range.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg='6' md='6'>
              <div className='about__content'>
                <p>
                  Online shopping has given us the chance to reach our customers
                  in a more efficient and competitive way, enabling us to give
                  you our very best deals. Our high-quality and consumer-focused
                  products lead the market by delivering true innovation and
                  convenience to our valued consumers.
                </p>
                <p>
                  Our promise is to provide the best brands at the best possible
                  price, accompanied by our passion for customer service. We
                  always depend on your valuable feedback and hope you enjoy
                  your shopping experience!
                </p>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='about__img'>
                <img src={aboutImg} alt='' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default About
