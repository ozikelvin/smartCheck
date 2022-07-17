import styled from 'styled-components/macro';


export const HomeMainContainer = styled.div`
    margin: 2rem;
    background: #fff;
    padding: 3em 2em;
    
`

export const Search = styled.div`
    margin: 0 1em;
    position: relative;

    @media screen and (max-width: 900px) {
        flex: none;
        margin: 1em 50%;
    }

    .search-icon{
        top: 40%;
        left: 1em;
        position: absolute;
    }
`
export const SearchInput = styled.input`
  
    border:1px solid #B3B3B480;
    background:#B3B3B480;
    padding:0.7rem 3rem;
    outline: none;
    border-radius: 5px;
`;

export const HomeSearch = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 2em;
    justify-content:space-around;

    [title] {
        margin-right: 2em;
    }

    button {
        @media screen and (max-width: 60em) {
            font-size: 0.8em;
            padding: 0.7em 2em;
        }
    }
`;
