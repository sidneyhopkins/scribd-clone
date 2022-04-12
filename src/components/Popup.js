import { ChevronRight } from '@mui/icons-material';
import Close from '@mui/icons-material/Close'
import React, { useState } from 'react'
import styles from '../Sass/popup.module.scss'

export default function Popup() {
  const [style, setStyle] = useState(styles.container);

  const handleClick = () => {
    setStyle(styles.visuallyhidden)
  }

  return (
    <div className={style}>
      <div className={styles.popupbox}>
        <button onClick={handleClick} className={styles.close}><Close/></button>
        <h1>Welcome to the Scribd clone!</h1>
        <p>This is a recreation of the Scribd landing page. All of the images and logos in this clone belong to Scribd Inc.</p>
        <p><a href='https://www.scribd.com/' target='_blank' rel="noopener noreferrer" ><span>Visit Scribd.com</span><ChevronRight className={styles.chevright} /></a></p>
        <p><a href='https://sidneyhopkins.info/projects' target='_blank' rel="noopener noreferrer" ><span>Return to my portfolio</span><ChevronRight className={styles.chevright} /></a></p>
        <p>If you have any questions, ideas, or concerns, feel free to contact me at sidhopkins14@gmail.com. You can view the code on my <a href='https://github.com/sidneyhopkins/scribd-clone' target='_blank' rel="noopener noreferrer" ><span>GitHub</span></a>.</p>
      </div>
    </div>
  )
}