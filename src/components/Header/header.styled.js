import styled from 'styled-components'


export const HeaderWrapper = styled.div`
    width: 100vw;
    background: #1B1464;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: space-between;

`

export const HeaderLogo = styled.div`

    img{
        height:60%;
    }

`

export const HeaderMenu = styled.div`
    display: none;
    @media (max-width: 990px){
        display: flex;
    }


`