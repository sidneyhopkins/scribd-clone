import React from 'react'
import '../Sass/global.scss'

export default function Layout({children}) {
  return (
    <div className="layout">        
      {children}
    </div>
  )
}
