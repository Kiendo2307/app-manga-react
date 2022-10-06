import classNames from "classnames/bind";
import styles from './BookMarkItem.module.scss';
import logo1 from '~/assets/images/content2.jpeg';
import logo2 from '~/assets/images/content3.png/';
import logo3 from '~/assets/images/content4.jpeg/';
import logo4 from '~/assets/images/content5.jpeg/';

const cx = classNames.bind(styles); 
function BookMarkItem() {
    return ( 
        <>
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={logo1}/>
            <div className={cx('info')}>
                <p  className={cx('name')}>
                <span>Berserk</span>
                </p>               
                <span className={cx('Vol')}>LASTET: <b className={cx('b')}>VOL. 12</b> </span>
            </div>         
        </div>

        <div className={cx('wrapper')}>
        <img className={cx('avatar')} src={logo2}/>
        <div className={cx('info')}>
        <p  className={cx('name')}>
                <span>One Piece</span>
        </p>    
            <span className={cx('Vol')}>LASTET: <b className={cx('b')}>VOL. 12</b> </span>
        </div>
     </div>

     <div className={cx('wrapper')}>
        <img className={cx('avatar')} src={logo3}/>
        <div className={cx('info')}>
        <p  className={cx('name')}>
                <span>Bleach</span>
        </p>    
            <span className={cx('Vol')}>LASTET: <b className={cx('b')}>VOL. 12</b> </span>
        </div>
     </div>

     <div className={cx('wrapper')}>
        <img className={cx('avatar')} src={logo4}/>
        <div className={cx('info')}>
        <p  className={cx('name')}>
                <span>Chainsaw Man</span>
        </p>    
            <span className={cx('Vol')}>LASTET: <b className={cx('b')}>VOL. 12</b> </span>
        </div>
     </div>
    
    </>
     );
}

export default BookMarkItem;