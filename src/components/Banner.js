import React from 'react'
import styles from '../Sass/banner.module.scss'

export default function Banner() {

  const href = 'https://github.com/sidneyhopkins/scribd-clone';
  return (
    <div className={styles.container}>
      <div className={styles.imagewrapper}>
        <div className={styles.imagechildwrapper}>
          <div className={styles.contentwrapper}>
            <div className={styles.contentbox}>
              <div className={styles.endless}><h2>Endless entertainment and knowledge</h2></div>
              <div className={styles.anytime}>Read or listen anytime, anywhere.</div>
              <a className={styles.readfree} href={href}>Read free for 30 days</a>
              <div className={styles.price}>Only $9.99/month after. Cancel anytime.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
