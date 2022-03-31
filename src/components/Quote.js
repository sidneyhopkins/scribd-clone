import React from 'react'
import styles from '../Sass/quote.module.scss'
import quote from "../assets/quote.png"

export default function Quote() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <blockquote className={styles.quotediv}>
          <img className={styles.quoteimg} src={quote} alt=''/>
          <p>Scribd is overall the best and most convenient deal for online reading.</p><span>Business Insider</span>
        </blockquote>
      </div>
    </div>
  )
}
