import React from 'react'
import styles from '../Sass/footer.module.scss'
import appstore from '../assets/appstore_white.svg'
import googleplay from '../assets/badge_playstore_english.svg'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
  const href = 'https://github.com/sidneyhopkins/scribd-clone';

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.visuallyhidden}>Footer Menu</h2>
        <div className={styles.topgrid}>
          <div className={styles.diva}>
            <h3>About</h3>
            <ul>
              <li><a href={href}><span>About Scribd</span></a></li>
              <li><a href={href}><span>Press</span></a></li>
              <li><a href={href}><span>Our blog</span></a></li>
              <li><a href={href}><span>Join our team!</span></a></li>
              <li><a href={href}><span>Contact us</span></a></li>
              <li><a href={href}><span>Invite friends</span></a></li>
              <li><a href={href}><span>Gifts</span></a></li>
              <li><a href={href}><span>Scribd for enterprise</span></a></li>
            </ul>
          </div>
          <div className={styles.divb}>
            <h3>Support</h3>
            <ul>
              <li><a href={href}><span>Help / FAQ</span></a></li>
              <li><a href={href}><span>Accessibility</span></a></li>
              <li><a href={href}><span>Purchase help</span></a></li>
              <li><a href={href}><span>AdChoices</span></a></li>
              <li><a href={href}><span>Publishers</span></a></li>
            </ul>
          </div>
          <div className={styles.divc}>
            <h3>Legal</h3>
            <ul>
              <li><a href={href}><span>Terms</span></a></li>
              <li><a href={href}><span>Privacy</span></a></li>
              <li><a href={href}><span>Copyright</span></a></li>
              <li><a href={href}><span>Cookie Preferences</span></a></li>
            </ul>
          </div>
          <div className={styles.divd}>
            <h3>Social</h3>
            <ul>
              <li><a href={href}><InstagramIcon className={styles.icons} fontSize='small'/><span>Instagram</span></a></li>
              <li><a href={href}><TwitterIcon className={styles.icons} fontSize='small'/><span>Twitter</span></a></li>
              <li><a href={href}><FacebookRoundedIcon className={styles.icons} fontSize='small'/><span>Facebook</span></a></li>
              <li><a href={href}><PinterestIcon className={styles.icons} fontSize='small'/><span>Pinterest</span></a></li>
            </ul>
          </div>
          <div className={styles.divo}></div>
          <div className={styles.dive}>
            <h3>Get our free apps</h3>
            <div className={styles.appdiv}>
              <a href={href}><img src={appstore} alt='app store'/></a>
              <a href={href}><img src={googleplay} alt='google play'/></a>
            </div>
          </div>
        </div>
        <div className={styles.bottomgrid}>
          <ul>
            <li><a href={href}><span>Books</span></a></li>
            <li><a href={href}><span>Audiobooks</span></a></li>
            <li><a href={href}><span>Magazines</span></a></li>
            <li><a href={href}><span>Podcasts</span></a></li>
            <li><a href={href}><span>Sheet Music</span></a></li>
            <li><a href={href}><span>Documents</span></a></li>
            <li><a href={href}><span>Snapshots</span></a></li>
            <li className={styles.lastlink}><a href={href}><span>Directory</span></a></li>
          </ul>
          <div className={styles.rightdiv}>
            <div className={styles.language}>
              Language: <span>English</span><ExpandMoreRoundedIcon variant='primary'/>
            </div>
            <div className={styles.copyright}>
              Copyright © 2022 Scribd Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
