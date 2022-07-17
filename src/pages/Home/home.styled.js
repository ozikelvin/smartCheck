import styled from 'styled-components'


export const HomeWrapper = styled.div`
    margin: 0;
    padding: 1.5rem 5%;
    box-sizing: border-box;

    @media screen and (max-width:60em) {
        padding-inline: 2%;
    }

`

export const HomeCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`
export const HomeMainContainer = styled.div`
    padding: 3em 2em;
    background-color: #fff;
`
export const HomeSearch = styled.div`
    gap: 1em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 900px) {
        justify-content: center;
    }

    /* .ant-select {
        @media screen and (max-width: 900px) {
         margin-left: auto;
         justify-self: flex-end;
        }
    } */
`
export const Search = styled.div`
    /* display: flex; */
    position: relative;
    
    @media screen and (max-width: 900px) {
        flex: none;
        /* width: 100%; */
        margin: auto 50%;
        /* margin-inline: 10% auto; */
    }

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
