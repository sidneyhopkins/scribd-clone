import React, { useEffect, useState } from 'react'
import styles from '../Sass/seewhy.module.scss'
import logo from "../assets/scribd_logo_horiz_small.svg"
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import logo2 from '../assets/4375067_logo_scribd_icon (3).svg';

export default function SeeWhy() {
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return window.removeEventListener('resize', handleResize)
    
  })

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>See why readers choose Scribd</h2>
        <table className={styles.table}>
          <thead>
            <tr className={styles.firstrow} >
              <td></td>
              <th><span><img className={styles.logo} src={dimensions.width < 700 ? logo2 : logo} alt='Scribd'/></span></th>
              <th>Audible</th>
              <th>Kindle Unlimited</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.row} >
              <th className={styles.leftheading} >1,000,000+ ebooks</th>
              <td><div className={styles.checkdiv}><CheckCircleRoundedIcon className={styles.checkicon} /></div></td>
              <td><div className={styles.xdiv}><CloseRoundedIcon className={styles.xicon}/></div></td>
              <td><div className={styles.checkdiv}><CheckCircleRoundedIcon className={styles.checkicon} /></div></td>
            </tr>
            <tr className={styles.row} >
              <th className={styles.leftheading} >200,000+ audiobooks</th>
              <td><div className={styles.checkdiv}><CheckCircleRoundedIcon className={styles.checkicon} /></div></td>
              <td><div className={styles.checkdiv}><CheckCircleRoundedIcon className={styles.checkicon} /></div></td>
              <td><div className={styles.xdiv}><CloseRoundedIcon className={styles.xicon}/></div></td>
            </tr>
            <tr className={styles.row} >
              <th className={styles.leftheading} >1,000,000+ magazine & news articles</th>
              <td><div className={styles.checkdiv}><CheckCircleRoundedIcon className={styles.checkicon} /></div></td>
              <td><div className={styles.xdiv}><CloseRoundedIcon className={styles.xicon}/></div></td>
              <td><div className={styles.xdiv}><CloseRoundedIcon className={styles.xicon}/></div></td>
            </tr>
            <tr className={styles.lastrow}>
              <th className={styles.leftheading} >Monthly fee</th>
              <td className={styles.scribdprice}>$9.99</td>
              <td>$14.95</td>
              <td>$9.99</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.lastupdate}><span><InfoOutlinedIcon fontSize='small' /></span><span>Last updated on August 5, 2021</span></div>
      </div>
    </div>
  )
}
