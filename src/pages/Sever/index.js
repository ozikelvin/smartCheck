import React , {useState} from 'react'
import { Select } from "antd";
import "antd/dist/antd.min.css";
import { HomeMainContainer , Search , SearchInput , HomeSearch } from "./server.styled";
import { BiSearch } from "react-icons/bi";
import { ServerTableBody ,ServerTableHeader } from "../../constants/domi";
import TableComponent from '../../components/Table';
import CreateServer from "../../components/createServer";
import Button from '../../components/Button';
import { SmallModal } from '../../components/modal/Modal';
import { Body , TR , TD} from "../../components/Table/table.styled";
import {  HiDotsVertical } from "react-icons/hi";


const TableBodyComponent = ({setValue, setShow }) => {
   const style = {
     margin: "1em auto",
     padding: "0.2em 1em",
     borderRadius: "0.2em",
   };
   return (
     <Body>
       {
         ServerTableBody.map((item , i) => (
           <TR key={i} >
             <TD> { item?.sn } </TD>
             <TD> { item.online ? <i className='bi bi-dot' style={{color:'#00ff00', fontSize:'47px'}}></i> : <i className='bi bi-dot' style={{color:'#f00', fontSize:'47px'}}></i> } { item.serverName } </TD>
             <TD> { item?.ipAddress } </TD>
             <TD> { item?.cpu } </TD>
             <TD>  { item?.memory } </TD>
             <TD>  { item?.storage } </TD>
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

const Server = () =>{

const [show  , setShow] = useState(false)

    return (
       <div  style={{padding:'1.5rem 2rem'}} >
  {show ? (
        <SmallModal closeModal={setShow} title={"Create Server"}>
          <CreateServer  />
        </SmallModal>
      ) : (
        <thead></thead>
      )}
    <HomeMainContainer>
    <HomeSearch>
         <div className='d-flex justify-content-around ' >
         <Search>
            <BiSearch className="search-icon" />
            <SearchInput placeholder="Enter a search keyword" />
          </Search>
          <Select defaultValue="Active status" />
         </div>
         <div className='d-flex ' >
            <Button type={'button'} label='Create Server' onClick={() => setShow(true)} />
         </div>
        </HomeSearch>
        <TableComponent  header={ServerTableHeader} Tbody={TableBodyComponent}  />

    </HomeMainContainer>

       </div> 
    )
}

export default Server