import classnames from "classnames/bind";
import styles from "./Footer.module.scss";
import logo from '~/assets/images/logo5-trans.png';

const cx = classnames.bind(styles)
function Footer() {
    return (
        <div className={cx('wrapper')}>
           <div className={cx('inner')}>
            <div className={cx('footer-infors')}>
                <div className={cx('heading')}>
                    <img className={cx('logo-footer')} src={logo}/>
                    <p className={cx('footer-infors-slogan')}>READING MODE</p>
                </div>
                <p className={cx('footer-infors-desc')}>
                    Đây là website đọc truyện tranh miễn phí được làm ra để test trình
                    độ code .-. Mọi thông tin và hình ảnh trên website đều được sưu
                    tầm trên Internet, chúng tôi không sở hữu hay chịu trách nhiệm bất
                    kỳ thông tin nào trên web này. Nếu làm ảnh hưởng đến cá nhân hay
                    tổ chức nào, khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay
                    lập tức.
                </p>
                <p className={cx('footer-infors-contact')}>
                    Liên hệ: <b className={cx('footer-infors-email')}>kiendotrung0723@gmail.com</b>
                </p>
            </div>

            <div className={cx('footer-category')}>
                <div className={cx('footer-category-container')}>
                    <div className={cx('footer-category-item')}>Action</div>
                    <div className={cx('footer-category-item')}>Adventure</div>
                    <div className={cx('footer-category-item')}>Comedy</div>
                    <div className={cx('footer-category-item')}>Fantasy</div>
                    <div className={cx('footer-category-item')}>Manga</div>
                    <div className={cx('footer-category-item')}>Live action</div>
                    <div className={cx('footer-category-item')}>Mystery</div>
                </div>
            </div>
           </div>
        </div>
      );
}

export default Footer;