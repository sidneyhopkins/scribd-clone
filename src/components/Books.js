import React from 'react'
import styles from '../Sass/books.module.scss'
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'
import img5 from '../assets/img5.webp'
import img6 from '../assets/img6.webp'
import img7 from '../assets/img7.webp'
import img8 from '../assets/img8.webp'
import img9 from '../assets/img9.webp'
import img10 from '../assets/img10.webp'
import img11 from '../assets/img11.webp'
import img12 from '../assets/img12.webp'




export default function Books() {
  const href = 'https://github.com/sidneyhopkins/scribd-clone';
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>The best books and audiobooks are waiting for you</h2>
        <ul className={styles.bookdiv}>
          <li><a href={href}><img src={img1} alt=''/></a></li>
          <li><a href={href}><img src={img2} alt=''/></a></li>
          <li><a href={href}><img src={img3} alt=''/></a></li>
          <li><a href={href}><img src={img4} alt=''/></a></li>
          <li className={styles.hidden} ><a href={href}><img src={img5} alt=''/></a></li>
          <li className={styles.hidden} ><a href={href}><img src={img6} alt=''/></a></li>
          <li className={styles.hidden} ><a href={href}><img src={img7} alt=''/></a></li>
          <li className={styles.hidden} ><a href={href}><img src={img8} alt=''/></a></li>
          <li className={styles.hidden} ><a href={href}><img src={img9} alt=''/></a></li>
          <li className={styles.hidden} ><a href={href}><img src={img10} alt=''/></a></li>
          <li className={styles.hidden} ><a href={href}><img src={img11} alt=''/></a></li>
          <li className={styles.hidden} ><a href={href}><img src={img12} alt=''/></a></li>
        </ul>
        <div className={styles.bottomdiv}>
          <a className={styles.readfree} href={href}>Read Free For 30 Days</a>
          <div className={styles.cancel}>Cancel anytime.</div>
        </div>
      </div>
    </div>
  )
}
