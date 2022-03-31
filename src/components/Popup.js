import { Close } from '@mui/icons-material'
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
        <Close onClick={handleClick} className={styles.close} />
        <h1>Welcome to the Scribd clone!</h1>
        <p>This is a recreation of the Scribd landing page. All of the images and logos in this clone belong to Scribd Inc.</p>
        <p><a href='https://www.scribd.com/' target='_blank' rel="noopener noreferrer" >Click here to visit Scribd.com</a></p>
        <p>If you have any questions, ideas, or concerns, feel free to contact me at sidhopkins14@gmail.com. You can view the code on my <a href='https://github.com/sidneyhopkins/scribd-clone' target='_blank' rel="noopener noreferrer" >GitHub</a>.</p>
      </div>
    </div>
  )
}
