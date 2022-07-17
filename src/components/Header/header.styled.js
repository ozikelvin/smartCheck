import styled from 'styled-components';


export const HeaderWrapper = styled.div`
    margin: 0;
    width: 100%;
    display: flex;
    padding: 1rem 2rem;
    background: #1B1464;
    box-sizing: border-box;
    align-items: space-between;
    justify-content: space-between;

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
`;