import React, { Fragment } from "react";
import {
  HomeWrapper,
  HomeCardWrapper,
  HomeMainContainer,
  HomeSearch,  
  SearchInput,   
  Search,
} from "./home.styled";
import HomeCard from "../../components/HomeCard";
import { HomeCardData, TableHeader, TableBody } from "../../constants/domi";
import { Select } from "antd";
import "antd/dist/antd.min.css";
import { BiSearch } from "react-icons/bi";
import Table from "../../components/Table";
import ServerResult from './../../components/result/index';
import { Body , TR , TD} from "../../components/Table/table.styled";
import {  HiDotsVertical } from "react-icons/hi";
import  Button  from "../../components/Button";

const TableBodyComponent = ({setValue, setShow }) => {
  const style = {
    margin: "1em auto",
    padding: "0.2em 1em",
    borderRadius: "0.2em",
  };
  return (
    <Body>
      {
        TableBody.map((item , i) => (
          <TR key={i} >
            <TD> { item?.sn } </TD>
            <TD> { item.online ? <i className='bi bi-dot' style={{color:'#00ff00', fontSize:'47px'}}></i> : <i className='bi bi-dot' style={{color:'#f00', fontSize:'47px'}}></i> } { item.appName } </TD>
            <TD> { item?.servers?.length } </TD>
            <TD> { item?.date } </TD>
            <TD> { item?.status === 'good' ? <i className='bi bi-check-circle'
            style={{color:'#00ff00', fontSize:'20px'}}
            ></i> : <i className='bi bi-warning'
            style={{backgroundColor:'#ffefa0', fontSize:'47px'}}
            ></i>  } { item?.status } </TD>
            <TD>
            <Button
          className=""
          onClick={() => {
            setValue(item);
            setShow(true);
          }}
          label="view result"
          style={style}
        />
       <HiDotsVertical className="mx-3" />
            </TD>
          </TR>
        ))
      }
    </Body>
  )
}

const Home = () => {
  return (
    <HomeWrapper>
      <HomeCardWrapper>
        {HomeCardData.map((item, id) => (
          <Fragment key={id}>
            <HomeCard {...item} />
          </Fragment>
        ))}
      </HomeCardWrapper>

      <HomeMainContainer>
        <HomeSearch>
          <Search>
            <BiSearch className="search-icon" />
            <SearchInput placeholder="Enter a search keyword" />
          </Search>
          <Select defaultValue="All Application" />
          <Select defaultValue="All Servers" />
          <Select defaultValue="Health Check Status" />
        </HomeSearch>

        <Table header={TableHeader}
        ChildComponent={ServerResult}
         body={TableBody} 
          Tbody={TableBodyComponent}
         />
      </HomeMainContainer>
    </HomeWrapper>
  );
};

export default Home;
