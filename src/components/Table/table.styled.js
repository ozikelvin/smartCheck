import styled from 'styled-components';

export const Table = styled.table`
    padding: 0;
    width: 100%;
    margin: 1em 0;
    min-height: 10em;
    box-sizing: border-box;
    border: 0.2em solid #f5f5f5;
`;

export const Caption = styled.caption`
    padding: 1em 5%;
    border: inherit;
    caption-side: top;
    text-align: right;

    svg {
        width: 2em;
        height: 2em;
        margin-inline: 0 0.2em;
        vertical-align: middle;
    }

    span {
        margin-left: 1em;
        align-items: center;
        display: inline-flex;
        justify-content: center;
        text-transform: capitalize;
    }
`;

export const Head = styled.thead`
`;

export const Body = styled.tbody`
`;

export const TH = styled.th`
    padding: 1em;
    line-height: 1;
    font-weight: 500;
    text-align: center;
    background-color: #f5f5f5;
    text-transform: uppercase;

    &:nth-child(5),&:nth-child(2) {
        text-align: left;
    }

    @media screen and (max-width: 60em) {
        font-size: 0.7em;
    }
`;

export const TR = styled.tr`
    padding-inline: 5%;
    border-bottom: 0.2em solid #f5f5f5;

    &:last-child {
        border-bottom: none;
    }
`;

export const TD = styled.td`
   text-align: center;
   white-space: nowrap;

   i {
    margin-right: 0.5em;
   }

    &:nth-child(5), &:nth-child(2) {
        text-align: left;
        padding-left: 1rem;
    }

    &:nth-child(3){
        color: #499DFF;
    }

    &:nth-child(5){
        display: flex;
        padding-top: 1rem;
        align-items: center;
    }

    button {
        @media screen and (max-width: 60em) {
            font-size: 0.7em;
        }
    }

    b {
        font-weight: 400;
        
        @media screen and (max-width: 80em){
            display: none;
        }
    }
`;
