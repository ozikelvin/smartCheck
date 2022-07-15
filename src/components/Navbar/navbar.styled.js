import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavContainer= styled.div``

export const NavWrapper= styled.div`
    background:#fff;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    @media (max-width: 990px){
        display: none
    }

`
export const NavLinkContainer= styled.div`
    display: flex;
    gap: 40px;

`
export const NavButtonContainer= styled.div`

    .navbutton{
        width: 230px;
        font-size:16px;
    }

`
export const NavLink= styled(Link)`
    display: flex;
    color: #1B1464;
    font-size: 16px;
    letter-spacing:0px;
    text-decoration: none;
    align-items: center;
    gap: 5px;


`

export const MobileNav = styled.div`
    display: none;
    position: absolute;  
    background: #fff;
    box-sizing: border-box;
    right: 0;
    padding: 2rem;
    transition: 0.5s ease-in;
@media(max-width:990px){
    display: flex;
}



`

export const MobileNavContainer= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    a{
        margin: 1rem 0;
    }


`
