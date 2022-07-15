import styled from 'styled-components'


export const HomeCardWrapper = styled.div`
    width: 400px;
    // height: 228px;
    background: #fff;
    padding: 0.5rem 1.5rem;
    border: 0.4px solid #707070;
    border-radius: 4px;
    margin-right: 2rem;


`
export const CardHeader = styled.div`


    h2{
        font-size: 16px;
        color:#262626;
        font-weight: normal;
    }

`
export const CardBody = styled.div`
    display: flex;
    justify-content: space-between;
    padding:1.5rem;

`
export const CircleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h2{
        font-size:14px;
        font-weight: normal;
    }

`
export const Circle = styled.div`
    width:66px;
    height:66px;
    border-radius: 50%;    
    border:${(props)=>props.border ||'none' } ;
    background: ${(props)=>props.Bgcolor||'#fff'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props)=>props.color||'#fff'};

`
export const CountContainer = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1{
        color: #1B1464;
        font-size: 53px;
    }
    h4{
        font-size:14px;
        font-weight: normal;

    }


`