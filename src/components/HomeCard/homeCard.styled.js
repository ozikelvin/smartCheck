import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 1em;
    padding: 1em;
    flex: 0 1 26em;
    background: #fff;
    border-radius: 4px;
    border: 0.4px solid #707070;
`;

export const Header = styled.div`
    h2 {
        color:#262626;
        font-size: 16px;
        font-weight: normal;
    }
`;

export const Body = styled.div`
    display: flex;
    padding:1.5rem;
    justify-content: space-between;

`
export const CircleContainer = styled.div`
    gap: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h2{
        font-size:14px;
        font-weight: normal;
    }
`;

export const Circle = styled.div`
    width:66px;
    height:66px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    color: ${(props) => props.color || '#fff'};
    border:${(props) => props.border || 'none'} ;
    background: ${(props) => props.Bgcolor || '#fff'};

`;

export const CountContainer = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    h1{
        color: #1B1464;
        font-size: 53px;
    }

    h4{
        font-size:14px;
        font-weight: normal;
    }
`;
