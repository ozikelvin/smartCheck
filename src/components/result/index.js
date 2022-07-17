import React from 'react'

import {ServerResultWrapper, ResultUl, Hr, ResultLi, ResultP} from './serverResult.styled'


const ServerResult = ({appName ,servers =[] 
}) =>{


    return (
        <ServerResultWrapper>
        <ResultP>{appName}</ResultP>
        <Hr/>
        <ResultP> End point</ResultP>
        <Hr/>
        <ResultUl>
            {
                servers.map((item , i) =>(
                    <ResultLi>
                        {item?.name}
                        <Hr/>
                    </ResultLi>
                ))
            }
        </ResultUl>
        </ServerResultWrapper>
    )
}
export default ServerResult