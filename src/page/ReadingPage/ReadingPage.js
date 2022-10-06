import {
  faBookmark,
  faChevronRight,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import img5 from "~/assets/images/tải xuống.jpg";
import styles from "./ReadingPage.module.scss";
import axios from "axios";

const cx = classNames.bind(styles);

function ReadingPage() {
  // const [dataReading, setDataReading] = useState([]);
  // let { id } = useParams();

  // useEffect(() => {
  //   async function fetchData() {
  //     let res = await axios.get(
  //       `https://server-manga-quangnvq98.vercel.app/api/manga-page/get-infors-comic/${id}`
  //     );
  //     let data = res && res.data.data ? res.data.data : [];
  //     if (res["status"]) {
  //       setDataReading(data.data.arr_chapter);
  //     }
  //     console.log("check", data.data.arr_chapter);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* {dataReading.map((item) => {
          <> */}
        <div className={cx("container")}>
          <div className={cx("heading-left")}>
            <span className={cx("left-menu")}>Trang chủ</span>
            <FontAwesomeIcon
              className={cx("left-icon")}
              icon={faChevronRight}
            />
            <span className={cx("left-menu")}>Thể loại</span>
            <FontAwesomeIcon
              className={cx("left-icon")}
              icon={faChevronRight}
            />
            <span className={cx("left-menu")}>Narruto</span>
            <FontAwesomeIcon
              className={cx("left-icon")}
              icon={faChevronRight}
            />
            <select className={cx("select")}>
              <option className={cx("option")}>Chapter 1</option>
            </select>
            <button className={cx("btn")}>Read text</button>
          </div>
          <div className={cx("heading-right")}>
            <div className={cx("item")}>
              <FontAwesomeIcon className={cx("more-btn")} icon={faBookmark} />
              <span className={cx("name-btn")}>Save Manga</span>
            </div>
            <div className={cx("item")}>
              <FontAwesomeIcon className={cx("more-btn")} icon={faCog} />
              <span className={cx("name-btn")}>Reading Mode</span>
            </div>
          </div>
        </div>
        <div className={cx("reading-comic")}>
          <div className={cx("reading-comic-item")}>
            <img className={cx("img")} src={img5} />
          </div>
          {/* <div className={cx("reading-comic-item")}>
              <img className={cx("img")} src={img4} />
            </div> */}
        </div>
        {/* </>;
        })} */}
      </div>
    </div>
  );
}

export default ReadingPage;
