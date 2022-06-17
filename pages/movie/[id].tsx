import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {
    
}

const Detail: NextPage<Props> = (props) => {
    const router = useRouter()
    console.log(router);
    console.log(props);
    
    
    return (
        <>
            Detail
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {  
    console.log(ctx);
    return {
        props: {

        },
    }
}
export default Detail;
