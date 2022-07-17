import React from 'react'
import LogoImg from '../../assets/icons/smartcheck-logo.svg'
import {HeaderWrapper, HeaderLogo,HeaderMenu} from './header.styled'
import {RiMenu3Fill, RiCloseFill} from 'react-icons/ri'

const Header = ({menu, setMenu}) => {
    
    return (
        <HeaderWrapper>
            <HeaderLogo>
                <img src={LogoImg} alt='logo'/>
            </HeaderLogo>
            <HeaderMenu>
                {menu?<RiCloseFill onClick ={()=>setMenu(false)} color="#fff" fontSize="2rem"/>:<RiMenu3Fill onClick ={()=>setMenu(true)}color="#fff" fontSize="2rem"/>  }
            </HeaderMenu>
        </HeaderWrapper>
    )
}

export default Header
