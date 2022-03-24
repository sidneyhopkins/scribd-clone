import React, { useState } from 'react'
import logo from "../assets/scribd_logo_horiz_small_white.svg"
import logo2 from "../assets/scribd_logo_horiz_small.svg"
import menu from '../assets/menu_white_24dp.svg'
import styles from '../Sass/navbar.module.scss'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  

  const href = 'https://github.com/sidneyhopkins/scribd-clone';

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.leftnav}>
          <button className={styles.menuicon} onClick={toggleShow}>
            <img src={menu} alt=""/>
          </button>
          <img className={styles.logo} src={logo} alt='' />
        </div>

        <div>
          <Offcanvas className={styles.menu} keyboard='true' scroll='true' backdrop='true' show={show} onHide={handleClose}>

            <Offcanvas.Body>
              <Offcanvas.Header className={styles.ocheader} closeButton>
                <img className={styles.logo2} src={logo2} alt='SCRIBD' />
              </Offcanvas.Header>
              <input className={styles.search} placeholder='Search' />

              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
               Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <div className={styles.rightnav} >
          <a href={href} className={styles.readfreebutton} >Read Free For 30 Days</a>

          <a href={href} className={styles.signinbutton}>Sign In</a>
        </div>
      </div>
    </div>
  )
}
