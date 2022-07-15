import styled from 'styled-components'


export const HomeWrapper = styled.div`
    background: #F1F3F5;
    padding: 1.5rem 2rem;
    height:100vh;
    width:100vw;


`

export const HomeCardWrapper = styled.div`
    display: flex;

`
export const HomeMainContainer = styled.div`
    margin: 2rem;
    padding:3rem 2rem;
    background: #fff;
`
export const HomeSearch = styled.div`
    display: flex;
    align-items: center;
    gap:20px;

`
export const Search = styled.div`
    position: relative;

    .search-icon{
        position: absolute;
        top:17px;
        // color:#B3B3B480;
        left:14px;
    }
`
export const SearchInput = styled.input`
    width:300px;
    border:1px solid #B3B3B480;
    background:#B3B3B480;
    padding:0.7rem 3rem;
    outline: none;
    border-radius: 5px;
    


`
