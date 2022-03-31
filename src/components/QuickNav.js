import React from 'react'
import styles from '../Sass/quicknav.module.scss'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import scribd from '../assets/scribd_logo_red.svg';



export default function QuickNav() {
  const href = 'https://github.com/sidneyhopkins/scribd-clone';

  const borderStyle = {
    borderBottom: '2px solid #A9085E'
  };

  return (
    <div className={styles.container}>
      <ul className={styles.navbar}>
        <a style={borderStyle} href={href}><li><span><img src={scribd} alt=''/></span><div className={styles.home} >Home</div></li></a>
        <a href={href}><li><span><MenuBookRoundedIcon/></span><div className={styles.word} >Books</div></li></a>
        <a href={href}><li><span><HeadphonesIcon/></span><div className={styles.word} >Audiobooks</div></li></a>
        <a href={href}><li><span><FeedRoundedIcon/></span><div className={styles.word} >Documents</div></li></a>
      </ul>
    </div>
  )
}
