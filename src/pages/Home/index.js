import React, { Fragment } from 'react'
import {HomeWrapper, HomeCardWrapper, HomeMainContainer, HomeSearch, SearchInput, Search} from './home.styled'
import HomeCard from '../../components/HomeCard'
import {HomeCardData} from '../../constants/domi'
import { Select } from 'antd';
import 'antd/dist/antd.min.css'
import {BiSearch} from 'react-icons/bi'




const Home = () => {
    return (
        <HomeWrapper>
            <HomeCardWrapper>
                {HomeCardData.map((item,id)=>(
                    <Fragment key={id}>
                     <HomeCard {...item}/>
                     </Fragment>

                ))}
                
            </HomeCardWrapper>

            <HomeMainContainer>
                <HomeSearch>
                <Search><BiSearch className="search-icon"/><SearchInput placeholder="Enter a search keyword"/></Search>
                    <Select defaultValue="All Application"/>
                    <Select defaultValue="All Servers"/>
                    <Select defaultValue="Health Check Status"/>
                </HomeSearch>


                </HomeMainContainer>
            
        </HomeWrapper>
    )
}

export default Home