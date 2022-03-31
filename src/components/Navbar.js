import React, { useEffect, useState } from 'react'
import logo from "../assets/scribd_logo_horiz_small_white.svg"
import logo2 from "../assets/scribd_logo_horiz_small.svg"
import appstore from '../assets/badge_appstore_english.svg'
import googleplay from '../assets/badge_playstore_english.svg'
import kindlefire from '../assets/kindle.svg'
import styles from '../Sass/navbar.module.scss'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Menu from '@mui/icons-material/Menu'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import scribd from '../assets/4375067_logo_scribd_icon (2).svg';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const href = 'https://github.com/sidneyhopkins/scribd-clone';

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftnav}>
          <button className={styles.menuicon} onClick={toggleShow}>
            <Menu/>
          </button>
          <a href={href}><img className={styles.logo} src={logo} alt='' /></a>
        </div>
        <Offcanvas className={styles.menu} keyboard='true' scroll='true' backdrop='true' show={show} onHide={handleClose}>
          <Offcanvas.Body>
            <Offcanvas.Header className={styles.ocheader} closeButton>
            <a href={href}><img className={styles.logo2} src={logo2} alt='' /></a>
            </Offcanvas.Header>
            <div className={styles.searchwrapper}>
              <div className={styles.searchbar}>
                <input className={styles.search} placeholder='Search' />
                <button className={styles.searchbutton}><SearchRoundedIcon className={styles.searchicon}/></button>
              </div>
            </div>
            <div className={styles.menubody}>
              <ul className={styles.upperlinks}>
                <li><a href={href} >Explore</a></li>
                <li><a href={href} >Upload</a></li>
                <li><a href={href} >FAQ</a></li>
              </ul>
              <h2 className={styles.browseby}>BROWSE BY</h2>
              <div className={styles.ulgrid}>
                <ul className={styles.leftcol}>
                  <li>Books</li>
                  <li>Magazines</li>
                  <li>Documents</li>
                </ul>
                <ul className={styles.rightcol}>
                  <li>Audiobooks</li>
                  <li>Podcasts</li>
                  <li>Sheet Music</li>
                </ul>
              </div>
              <div className={styles.intdiv}>
                <h2 className={styles.interests}>INTERESTS</h2>
                <ul className={styles.intlist}>
                  <li>Career & Growth</li>
                  <li>Business</li>
                  <li>Finance & Money Management</li>
                  <li>Politics</li>
                  <li>Sports & Recreation</li>
                  <li>Games & Activities</li>
                  <li>Comics & Graphic Novels</li>
                  <li>Social Science</li>
                  <li>True Crime</li>
                  <li>Travel</li>
                </ul>
              </div>
              <h2 className={styles.visuallyhidden}>Mobile Apps and Social Media</h2>
              <p className={styles.apptext}>Download our app to read books on any device</p>
              <a href={href}><img className={styles.apps} src={appstore} alt='apple app store' /></a>
              <a href={href}><img className={styles.apps} src={googleplay} alt='google play store'  /></a>
              <a href={href}><img className={styles.apps} src={kindlefire} alt='kindle fire' /></a>
              <div className={styles.sociallinks}>
                <a href={href}><TwitterIcon className={styles.twitter} fontSize='large' /></a>
                <a href={href}><FacebookIcon className={styles.facebook} fontSize='large' /></a>
                <a href={href}><img className={styles.scribdicon} src={scribd} alt=''/></a>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <div className={styles.rightnav} >
          <a href={href} className={styles.readfreebutton} style={scrollPosition !== 0 ? {opacity:1} : {opacity:0}} >Read Free For 30 Days</a>
          <a href={href} className={styles.signinbutton}>Sign In</a>
        </div>
      </div>
    </div>
  )
}
