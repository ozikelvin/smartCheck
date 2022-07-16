import Button from '../Button';
import { TD } from './table.styled';
import { HiMenu as Menu } from 'react-icons/hi';


const Row = ({ item , setValue , setShow }) =>
{
    const style = { margin: '1em auto', padding: '0.2em 1em', borderRadius: '0.2em', };
    const arrKey = Object.keys(item);
    // return (item.map((val, id) => id == 5 ? <Button key={val} label='view result' style={style} /> : <TD key={val}>{val}</TD>))
    // return item.map((val, id) => <TD key={val}>
    //     {id == 5 ? <>
    //         <Button key={val} onClick={()=> {setValue(item); setShow(true) }} label='view result' style={style} />
    //         <Menu />
    //     </> : val}
    //     </TD>)
        return (
            <>
                {
                    arrKey.map((keyVal , i) =>(
                <TD key={i} >
                 { 
                   Array.isArray( item[keyVal]) ?  `${item[keyVal]?.length} servers` :  item[keyVal]
                 } 
                    {
                        item[keyVal] === 'good' ? <i> &#9989; </i> : item[keyVal] === 'bad' ? <i>&#10008;</i> : <></>
                    }
                </TD>
            ))  
                }
                
               <div className='mx-3' >
               <Button  
                className=''
                onClick={()=> {setValue(item); setShow(true) }} 
                label='view result' style={style} />
                  <Menu className='mx-2' /> 
               </div> 
            </>
        )

};


export default Row;