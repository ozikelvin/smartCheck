import React, { Fragment , useState } from 'react'
import {HomeWrapper, HomeCardWrapper, HomeMainContainer, HomeSearch, SearchInput, Search} from './home.styled'
import HomeCard from '../../components/HomeCard'
import {HomeCardData} from '../../constants/domi'
import { Select } from 'antd';
import 'antd/dist/antd.min.css'
import {BiSearch} from 'react-icons/bi'
import { SmallModal } from  "../../components/modal/Modal";



const Home = () => {

    const [show , setShow] = useState(true);

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
                   {
                    show ?  <SmallModal closeModal={setShow} title={'Small'} >
                        <div>
                            helloo
                        </div>
                    </SmallModal> : <div></div>
                   }

                </HomeMainContainer>
            
        </HomeWrapper>
    )
}

export default Home
