import styled from 'styled-components/macro'


export const SmallModalWrapper = styled.div`
        width: 50%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        z-index: 999;
        overflow-x: hidden;
        overflow-y: auto;
        text-align: justify;
        height: 70vh;

        @media (max-width: 768px) {
            width: 90%;
            
          }
          

`

export const SmallModalTitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: 0.01em;
    color: #2e3192;
    text-align: left;

`

export const BackDrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    background: rgba(45, 45, 53, 0.8);
    opacity: 0.5;


` 