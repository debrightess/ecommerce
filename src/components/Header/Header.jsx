import React, { useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import './header.css'

import { motion } from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { Container, Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'

const nav__links = [
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'shop',
    display: 'Shop',
  },
  {
    path: 'cart',
    display: 'Cart',
  },
  {
    path: 'about',
    display: 'About-Us',
  },
]

const Header = () => {
  const headerRef = useRef(null)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)

  const menuRef = useRef(null)
  const navigate = useNavigate()
  const { currentUser } = useAuth()

  const stidkyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logged out')
        navigate('/home')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  useEffect(() => {
    stidkyHeaderFunc()

    return () => window.removeEventListener('scroll', stidkyHeaderFunc)
  })

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  const navigateToCart = () => {
    navigate('/cart')
  }

  const navigateToLogin = () => {
    navigate('/login')
  }

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <div>
                <h1>Monster-Gadget</h1>
              </div>
            </div>

            <div className='navigation' ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {nav__links.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'nav__active' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className='nav__icons'>
              <span className='cart__icon' onClick={navigateToCart}>
                <i className='ri-shopping-bag-line'></i>
                <span className='badge'>{totalQuantity}</span>
              </span>

              <div className='profile'>
                {/* <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=''
                /> */}
                <span className='user-email'>
                  <p>
                    {currentUser ? (
                      currentUser.email
                    ) : (
                      <img onClick={navigateToLogin} src={userIcon} alt='' />
                    )}
                  </p>
                </span>
              </div>
              <div className='nav__icons'>
                {currentUser ? (
                  <span className='cart__icon' onClick={logout}>
                    <i class='ri-logout-box-line'></i>
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className='mobile__menu'>
                <span onClick={menuToggle}>
                  <i className='ri-menu-line'></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
