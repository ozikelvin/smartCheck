import React from 'react'
import {NavWrapper, NavLinkContainer, NavButtonContainer, NavLink,NavContainer, MobileNav, MobileNavContainer} from './navbar.styled'
import HomeIcon from '../../assets/icons/home-icon.svg'
import ServerIcon from '../../assets/icons/server-icon.svg'
import ApplicationIcon from '../../assets/icons/application-icon.svg'
import Button from '../Button';
import { useLocation } from "react-router-dom";

const Navbar = ({menu}) => {

    const { pathname } = useLocation();
    

    return (
        <NavContainer>
        <NavWrapper>
            <NavLinkContainer>
                <NavLink 
                className={ pathname === '/' ? 'active-tab ' : 'inactive' }
                 to="/"><img src={HomeIcon}  alt="home"/>Home</NavLink>
                <NavLink 
                className={ pathname === '/server' ? 'active-tab ' : 'inactive' }
                to="/server"><img src={ServerIcon} alt="home"/>Server</NavLink>
                <NavLink 
                className={ pathname === '/application' ? 'active-tab ' : 'inactive' }
                 to="/application"><img src={ApplicationIcon} alt="home"/>Application</NavLink>

            </NavLinkContainer>
            <NavButtonContainer>
                <Button className={"navbutton"} label={"Check Health Status"}/>

            </NavButtonContainer>




            
        </NavWrapper>

        {menu && (

            <MobileNav>
                <MobileNavContainer>
                <NavLink to="/"><img src={HomeIcon} alt="home"/>Home</NavLink>
                <NavLink to="/server"><img src={ServerIcon} alt="home"/>Server</NavLink>
                <NavLink to="/application"><img src={ApplicationIcon} alt="home"/>Application</NavLink>

                <Button className={"navbutton"} label={"Check Health Status"}/>

                </MobileNavContainer>
            </MobileNav>
        )}
        </NavContainer>
    )
}

export default Navbar
