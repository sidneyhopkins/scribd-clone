import React from 'react'
import styles from '../Sass/press.module.scss'
import techcrunch from '../assets/logo_techcrunch.svg'
import forbes from '../assets/logo_forbes.svg'
import wsj from '../assets/logo_wallstreetjournal.svg'
import latimes from '../assets/logo_los_angeles_times.svg'
import today from '../assets/logo_today.svg'


export default function Press() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>IN THE PRESS</h2>
        <ul className={styles.logodiv}>
          <li><img src={techcrunch} alt='Tech Crunch'/></li>
          <li><img src={forbes} alt='Forbes'/></li>
          <li><img src={wsj} alt='Wall Street Journal'/></li>
          <li><img src={latimes} alt='Los Angeles Times'/></li>
          <li><img src={today} alt='Today'/></li>
        </ul>
      </div>
    </div>
  )
}
