import React, { useState } from "react";
import { SmallModal } from "../modal/Modal";
import { BsFillFilePdfFill as File } from "react-icons/bs";
import { Table, Caption, Head, TR, TH } from "./table.styled";


const TableComponent = ({ header = [], ChildComponent, Tbody }) =>
{

  const [show, setShow] = useState(false);
  const [serverModalValue, setServerModalValue] = useState({});

  return (
    <Table>
      {show ? (
        <SmallModal closeModal={setShow} title={"Health Checks"}>
          <ChildComponent {...serverModalValue} />
        </SmallModal>
      ) : (<thead />)}
      <Caption>
        <File /><File />
        <span>showing 10 of 1000 entries</span>
      </Caption>
      <Head>
        <TR>
          {header.map((item, key) => (<TH key={key}>{item}</TH>))}
        </TR>
      </Head>
      <Tbody setShow={setShow} setValue={setServerModalValue} />
    </Table>
  );
};

export default TableComponent;
