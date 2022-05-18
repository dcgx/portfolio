import React from 'react'
import styles from './BottomNavigation.module.scss'

import { TiHomeOutline } from 'react-icons/ti'
const BottomNavigation = () => {
  return (
    <nav className={styles.bottomNav}>
      <a>
        <TiHomeOutline />
      </a>
      <a className="active">
        <TiHomeOutline />
      </a>
      <a>
        <TiHomeOutline />
      </a>
      <a>
        <TiHomeOutline />
      </a>
    </nav>
  )
}

export default BottomNavigation
