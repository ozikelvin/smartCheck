import Row from "./row";
import { BsFillFilePdfFill as File } from "react-icons/bs";
import { Table, Caption, Head, Body, TR, TH } from "./table.styled";
import { SmallModal } from "../modal/Modal";
import React, { useState } from "react";
import ServerResult from "../result";

const TableComponent = ({ header = [], body = [] }) => {
  const [show, setShow] = useState(false);
  
  const [serverModalValue, setServerModalValue] = useState({});

  return (
    <Table>
      {show ? (
        <SmallModal closeModal={setShow} title={"Health Checks"}>
          <ServerResult {...serverModalValue} />
        </SmallModal>
      ) : (
        <div></div>
      )}
      <Caption>
        <File />
        <File />
        <span>showing 10 of 1000 entries</span>
      </Caption>
      <Head>
        <TR>
          {header.map((item, key) => (
            <TH key={key}>{item}</TH>
          ))}
        </TR>
      </Head>
      <Body>
        {body.map((item, key) => (
          <TR key={key}>
            <Row setValue={setServerModalValue} setShow={setShow} item={item} />
          </TR>
        ))}
      </Body>
    </Table>
  );
};

export default TableComponent;
