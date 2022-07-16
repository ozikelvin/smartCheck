import Row from './row';
import { BsFillFilePdfFill as File } from 'react-icons/bs';
import { Table, Caption, Head, Body, TR, TH } from './table.styled';

export default ({ header = [], body = [] }) =>
{
    return (
        <Table>
            <Caption>
                <File />
                <File />
                <span>showing 10 of 1000 entries</span>
            </Caption>
            <Head>
                <TR>
                    {header.map((item, key) => <TH key={key}>{item}</TH>)}
                </TR>
            </Head>
            <Body>
                {body.map((item, key) => <TR key={key}><Row item={item} /></TR>)}
            </Body>
        </Table>
    );
};