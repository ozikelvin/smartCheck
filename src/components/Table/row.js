import Button from '../Button';
import { TD } from './table.styled';
import { HiMenu as Menu } from 'react-icons/hi';

export default ({ item }) =>
{
    const style = { margin: '1em auto', padding: '0.2em 1em', borderRadius: '0.2em', };
    // return (item.map((val, id) => id == 5 ? <Button key={val} label='view result' style={style} /> : <TD key={val}>{val}</TD>))
    return item.map((val, id) => <TD key={val}>
        {id == 5 ? <>
            <Button key={val} label='view result' style={style} />
            <Menu />
        </> : val}
    </TD>)
};
