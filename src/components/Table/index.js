
import { BsFillFilePdfFill as File } from "react-icons/bs";
import { Table, Caption, Head, Body, TR, TH } from "./table.styled";
import { SmallModal } from "../modal/Modal";
import React, { useState } from "react";


const TableComponent = ({ header = [], ChildComponent , Tbody }) => {
  const [show, setShow] = useState(false);

  const [serverModalValue, setServerModalValue] = useState({});

  return (
    <Table>
      {show ? (
        <SmallModal closeModal={setShow} title={"Health Checks"}>
          <ChildComponent {...serverModalValue} />
        </SmallModal>
      ) : (
        <thead></thead>
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
          <Tbody setShow={setShow} setValue={setServerModalValue} />
    </Table>
  );
};

export default TableComponent;
