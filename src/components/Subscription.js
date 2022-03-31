import React from 'react'
import styles from '../Sass/subscription.module.scss'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';

export default function Subscription() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <h2 className={styles.subscriptionheading}>All in one simple subscription</h2>
        </div>
        <div className={styles.categories}>
          <div className={styles.books}>
            <span><MenuBookRoundedIcon className={styles.icon} fontSize='large'/></span>
            <h3>Books</h3>
          </div>
          <div className={styles.audiobooks}>
            <span><HeadphonesIcon  className={styles.icon} fontSize='large'/></span>
            <h3>Audiobooks</h3>
          </div>
          <div className={styles.magazines}>
            <span><AutoStoriesRoundedIcon  className={styles.icon} fontSize='large'/></span>
            <h3>Magazines</h3>
          </div>
          <div className={styles.podcasts}>
            <span><MicRoundedIcon  className={styles.icon} fontSize='large'/></span>
            <h3>Podcasts</h3>
          </div>
          <div className={styles.music}>
            <span><MusicNoteRoundedIcon  className={styles.icon} fontSize='large'/></span>
            <h3>Sheet Music</h3>
          </div>
          <div className={styles.documents}>
            <span><FeedRoundedIcon className={styles.icon}  fontSize='large'/></span>
            <h3>Documents</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
