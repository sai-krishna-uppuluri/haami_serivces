import React from 'react'
import navStyles  from '../styles/Navbar.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'
 import {MdClose} from 'react-icons/md'
 import Link from 'next/link'
import { useState } from 'react'


const Navbar = () => {

    const [toggle , setToggle] = useState(false)

    const onClickHandler = () => {
        setToggle(true)
    }


  return (
    <div className= {navStyles.navbarContainer}>
            <h1 className={navStyles.navHeadText}> Haami </h1>
        <div className={navStyles.navbarLargeDeviceContainer}>
            <ul className={navStyles.menuListContainer}>
                <Link className={navStyles.navLink} href = "/"><li className={navStyles.menuTextLarge}> Home </li> </Link>
                <Link className={navStyles.navLink} href = "/about"><li className={navStyles.menuTextLarge}> About </li> </Link>
                <Link className={navStyles.navLink} href = "/contact"><li className={navStyles.menuTextLarge}> Contact Us </li></Link>
                <Link className={navStyles.navLink} href = "/blogs"><li className={navStyles.menuTextLarge}> Blogs </li></Link>
            </ul>
        </div>
        <div className={navStyles.navbarSmallDeviceContainer}>
        <GiHamburgerMenu size = {40} color = "#fff"  onClick={() => setToggle(true)}/>
            
          {toggle && (
            <div className={navStyles.navSmallDeviceOverlay}>
             <MdClose color = "#fff" size = {40} onClick={ () => setToggle(false)} className={navStyles.closeButton} />
            <ul className={navStyles.menuListContainerSmallDevice}>
            <Link className={navStyles.navLink} href = "/"><li className={navStyles.menuText}> Home </li> </Link>
            <Link className={navStyles.navLink} href = "/about"> <li className={navStyles.menuText}> About </li> </Link>
            <Link className={navStyles.navLink} href = "/contact">   <li className={navStyles.menuText}> Contact Us </li> </Link>
            <Link className={navStyles.navLink} href = "/blogs">  <li className={navStyles.menuText}> Blogs </li> </Link>
            </ul>
            </div>
            )}
        </div>
    </div>
  )
}

export default Navbar
