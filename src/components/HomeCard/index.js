import React from 'react';
import { Wrapper, Header, Body, CircleContainer, Circle, CountContainer } from './homeCard.styled'

const Card = ({ title, circles, circle1, circle1info, circle1border, circle1textcolor, circle2, circle2info, circle2bgcolor, circle3, circle3info, circle3bgcolor, count }) =>
{

    return (
        <Wrapper>
            <Header><h2>{title}</h2></Header>
            <Body>
                {circles ? (
                    <>
                        <CircleContainer>
                            <Circle color={circle1textcolor} border={circle1border}>{circle1}</Circle>
                            <h2>{circle1info}</h2>
                        </CircleContainer>
                        <CircleContainer>
                            <Circle Bgcolor={circle2bgcolor}>{circle2}</Circle>
                            <h2>{circle2info}</h2>
                        </CircleContainer>
                        <CircleContainer>
                            <Circle Bgcolor={circle3bgcolor}>{circle3}</Circle>
                            <h2>{circle3info}</h2>
                        </CircleContainer>
                    </>
                ) : (
                    <CountContainer>
                        <h1>{count}</h1><h4>Counts</h4>
                    </CountContainer>
                )}

            </Body>
        </Wrapper>
    )
}

export default Card;
