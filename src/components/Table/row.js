import Button from "../Button";
import { TD } from "./table.styled";
import { BsCheckCircleFill } from 'react-icons/bs'
import { HiDotsVertical } from "react-icons/hi";
import WarningIcon from '../../assets/icons/warning-sign.png'

const Row = ({ item, setValue, setShow }) =>
{
  const style = {
    margin: "1em auto",
    padding: "0.2em 1em",
    borderRadius: "0.2em",
  };
  const arrKey = Object.keys(item);

  return (
    <>
      {arrKey.map((keyVal, i) => (
        <TD key={i}>
          {Array.isArray(item[keyVal])
            ? `${item[keyVal]?.length} servers`
            : item[keyVal]}
          {item[keyVal] === "Healthy" ? (
            <BsCheckCircleFill color="#14DB77" fontSize="1.3em" />
          ) : item[keyVal] === "Unhealthy" ? (
            <img style={{ width: '21px', height: '21px' }} src={WarningIcon} alt="warning" />
          ) : (
            <></>
          )}
        </TD>
      ))}

      <td style={{ textAlign: 'center' }} className="">
        <Button
          style={style}
          label="view result"
          onClick={() => { setValue(item); setShow(true); }}
        />
        <HiDotsVertical className="mx-3" />
      </td>
    </>
  );
};

export default Row;
