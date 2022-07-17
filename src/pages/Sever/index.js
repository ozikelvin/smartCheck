import React, { useState } from 'react'
import { Select } from "antd";
import "antd/dist/antd.min.css";
import { HomeMainContainer, Search, SearchInput, HomeSearch } from "./server.styled";
import { BiSearch } from "react-icons/bi";
import { ServerTableBody, ServerTableHeader } from "../../constants/domi";
import TableComponent from '../../components/Table';
import CreateServer from "../../components/createServer";
import Button from '../../components/Button';
import { SmallModal } from '../../components/modal/Modal';
import { Body, TR, TD } from "../../components/Table/table.styled";
import { HiDotsVertical } from "react-icons/hi";


const TableBodyComponent = ({ setValue, setShow }) =>
{
  const style = {
    margin: "1em auto",
    padding: "0.2em 1em",
    borderRadius: "0.2em",
  };
  return (
    <Body>
      {
        ServerTableBody.map((item, i) => (
          <TR key={i} >
            <TD> {item?.sn} </TD>
            <TD> {item.online ?
              <i className='bi bi-dot' style={{ color: '#00ff00', fontSize: '47px' }}></i> :
              <i className='bi bi-dot' style={{ color: '#f00', fontSize: '47px' }}></i>}{item.serverName}
            </TD>
            <TD>{item?.ipAddress}</TD>
            <TD>{item?.cpu} </TD>
            <TD>{item?.memory}</TD>
            <TD>{item?.storage}</TD>
            <TD>
              <Button
                style={style} label="edit"
                onClick={() => { setValue(item); setShow(true); }}
              />
              <HiDotsVertical className="mx-3" />
            </TD>
          </TR>
        ))
      }
    </Body>
  )
}

const Server = () =>
{
  // States
  const [show, setShow] = useState(false);


  // Styling Variable
  const style = { paddingInline: '2em', marginLeft: 'auto' };

  return (
    <div style={{ padding: '1.5em 2em' }} >
      {show ? (
        <SmallModal closeModal={setShow} title={"Create Server"}>
          <CreateServer />
        </SmallModal>
      ) : (
        <div />
      )}
      <HomeMainContainer>
        <HomeSearch>

          <Search>
            <BiSearch className="search-icon" />
            <SearchInput placeholder="Enter a search keyword" />
          </Search>

          <Select defaultValue="Active status" />

          <Button type={'button'} label='Create Server' onClick={() => setShow(true)} style={style} />
        </HomeSearch>

        <TableComponent header={ServerTableHeader} Tbody={TableBodyComponent} />

      </HomeMainContainer>

    </div>
  )
}

export default Server