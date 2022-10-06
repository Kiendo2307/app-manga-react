import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import BookItem from "~/components/BookItem/BookItem";
import { useEffect, useState } from "react";
import CONFIG_ENV from "src/utils/api-url";

const cx = classNames.bind(styles);

function Home() {
  const [bookResult, setBookResult] = useState([]);

  useEffect(() => {
    fetch(`${CONFIG_ENV.url}${CONFIG_ENV.api_get_list_newest_comic}`)
      .then((res) => res.json())
      .then((res) => {
        if (res["status"]) {
          setBookResult(res.data.data);
        }
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("home-banner-1")}>
          <div className={cx("banner-item-container")}>
            <h6 className={cx("banner-item-category")}>FEATURE MANGA</h6>
            <h1 className={cx("banner-item-name")}>NARUTO</h1>
            <p className={cx("banner-item-desc")}>
              The best selling mangas is now available on kiendotrung0723.com.
              Check out the complete series for free!
            </p>
            <div className={cx("banner-item-red")}>
              <p>Read now</p>
            </div>
          </div>
        </div>

        {/* <div className={cx('home-banner')}>
                    <img id="image1" className={cx('img-banner-2')} src={naruto2}/>
                    <div className={cx('banner-item-container')}>
                        <h6 className={cx('banner-item-category')} >FEATURE MANGA</h6>
                        <h1 className={cx('banner-item-name')}>NARUTO</h1>
                        <p className={cx('banner-item-desc')}>
                            The best selling mangas is now available on kiendotrung0723.com. Check
                            out the complete series for free!
                        </p>
                        <div className={cx('banner-item-red')}>
                            <p >Read now</p>
                        </div>
                    </div>
                </div> */}

        {/* <div className={cx('home-banner-2')}>
                    <div className={cx('banner-item-container')}>
                        <h6 className={cx('banner-item-category')} >FEATURE MANGA</h6>
                        <h1 className={cx('banner-item-name')}>NARUTO</h1>
                        <p className={cx('banner-item-desc')}>
                            The best selling mangas is now available on kiendotrung0723.com. Check
                            out the complete series for free!
                        </p>
                        <div className={cx('banner-item-red')}>
                            <p >Read now</p>
                        </div>
                    </div>
                </div> */}
        {/* <div className={cx('home-banner-3')}>
                    <div className={cx('banner-item-container')}>
                        <h6 className={cx('banner-item-category')} >FEATURE MANGA</h6>
                        <h1 className={cx('banner-item-name')}>NARUTO</h1>
                        <p className={cx('banner-item-desc')}>
                            The best selling mangas is now available on quangnvq.com. Check
                            out the complete series for free!
                        </p>
                        <div className={cx('banner-item-red')}>
                            <p >Read now</p>
                        </div>
                    </div>
                </div> */}
        <button className={cx("left-btn")} type="button">
          <FontAwesomeIcon className={cx("icon-btn")} icon={faAngleLeft} />
        </button>
        <button className={cx("right-btn")} type="button">
          <FontAwesomeIcon className={cx("icon-btn")} icon={faAngleRight} />
        </button>

        <div className={cx("home-container")}>
          <div className={cx("container")}>
            <div className={cx("content-heading")}>
              <h2 className={cx("heading-name")}>Truyện mới</h2>
            </div>
            <div className={cx("content-comic")}>
              {bookResult.length > 0 &&
                bookResult.map((result) => (
                  <BookItem key={result.id} data={result} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
