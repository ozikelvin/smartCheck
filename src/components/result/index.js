import React from 'react'

const ServerResult = ({appName ,servers =[] 
}) =>{


    return (
        <div>
        <p>{appName}</p>
        <p> endpoint</p>
        <ul>
            {
                servers.map((item , i) =>(
                    <li>
                        {item?.name}
                    </li>
                ))
            }
        </ul>
        </div>
    )
}
export default ServerResult