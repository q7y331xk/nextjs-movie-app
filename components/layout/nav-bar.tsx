import { NextPage } from 'next';
import styles from 'styles/layout/nav-bar.module.scss';
import Dlink from 'components/custom/dlink';

const NavBar: NextPage = () => {
        
    return (
        <div className={styles.wrapper}>
            <Dlink
                href='/'
                text='Home'
                styleObj={styles.link}
            />
            <Dlink
            href='/about'
            text='About'
            styleObj={styles.link}
            />
        </div>
    )
}

export default NavBar;