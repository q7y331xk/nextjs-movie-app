import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
    href: string;
    styleObj: string;
    text: string;
}

const Dlink: NextPage<Props> = (props) => {
    return (
        <>
        <Link href={props.href}>
            <a className={props.styleObj}>
                {props.text}
            </a>
        </Link>
        </>
    )
}

export default Dlink;
