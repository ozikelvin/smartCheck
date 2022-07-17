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
    font-weight: 500;
    background-color: #f5f5f5;
    text-transform: uppercase;
    text-align: center;

    &:nth-child(5),&:nth-child(2) {
        text-align: left;
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
    vertical-align: middle;

    &:nth-child(5),&:nth-child(2) {
        text-align: left;
        padding-left: 1rem;
    }
    &:nth-child(3){
        color: #499DFF;
    }
    &:nth-child(5){
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        gap:5px;
        padding-top: 1rem;
    }
    

    &:nth-child(6) {
        text-align: right;
        padding-inline: 5% 1em;

        svg {
            margin-inline: 0.5em;
            transform: scaleX(0.2);
        }
    }
`;
