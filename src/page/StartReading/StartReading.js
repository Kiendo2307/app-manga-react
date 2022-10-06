import classNames from "classnames/bind";
import styles from "./StartReading.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import List from "./List";
import CONFIG_ENV from "~/utils/api-url";

const cx = classNames.bind(styles);
function StartReading() {
  const [dataInfors, setdataInfors] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      console.log(
        "url",
        `${CONFIG_ENV.url}${
          CONFIG_ENV.api_get_infors_comic
        }${encodeURIComponent(id)}`
      );
      let res = await axios.get(
        `${CONFIG_ENV.url}${
          CONFIG_ENV.api_get_infors_comic
        }${encodeURIComponent(id)}`
      );
      let data = res && res.data.data ? res.data.data : [];
      if (res["status"]) {
        setdataInfors(data.data);
      }
      console.log("check", data.data);
    }
    fetchData();
  }, []);

  return (
    <div className={cx("wraprer")}>
      <div className={cx("banner")}></div>
      {dataInfors && (
        <div className={cx("infors")}>
          <div className={cx("common")}>
            <div className={cx("left")}>
              <img className={cx("img1")} src={dataInfors.thumbnail} alt="" />
              <button className={cx("start-btn")}>
                {" "}
                Start reading Vol. 1{" "}
              </button>
            </div>
            <div className={cx("right")}>
              <div className={cx("heading")}>
                <h1 className={cx("name")}>{dataInfors.title}</h1>
                <FontAwesomeIcon className={cx("btn")} icon={faBookmark} />
              </div>
              <div className={cx("line")}>
                <span className={cx("title")}>Thể loại: </span>
                <span className={cx("value")}>{dataInfors.category}</span>
              </div>
              <div className={cx("line")}>
                <span className={cx("title")}>Tác giả: </span>
                <span className={cx("value")}>{dataInfors.author}</span>
              </div>
              <div className={cx("line")}>
                <span className={cx("title")}>Trạng thái: </span>
                <span className={cx("value")}>{dataInfors.status}</span>
              </div>
              <div className={cx("line")}>
                <span className={cx("title")}>Đánh giá: </span>
                <span className={cx("value")}>
                  <FontAwesomeIcon className={cx("value-item")} icon={faStar} />
                  <FontAwesomeIcon className={cx("value-item")} icon={faStar} />
                  <FontAwesomeIcon className={cx("value-item")} icon={faStar} />
                  <FontAwesomeIcon className={cx("value-item")} icon={faStar} />
                  <FontAwesomeIcon
                    className={cx("value-item")}
                    icon={faStarHalfAlt}
                  />
                </span>
              </div>
              <div className={cx("desc")}>{dataInfors.desc}</div>
            </div>
          </div>
          <div className={cx("vol")}>
            <div className={cx("heading-vol")}>
              <div className={cx("heading-left")}>
                <span className={cx("vol-title")}>VOL. </span>
                <div className={cx("line-vertical")}></div>
                <span className={cx("more-title")}>CH. </span>
                <div className={cx("line-vertical")}></div>
                <span className={cx("more-title")}>Slide Stories. </span>
                <div className={cx("line-vertical")}></div>
                <span className={cx("more-title")}>Gallery. </span>
                <div className={cx("line-vertical")}></div>
              </div>
              <div className={cx("heading-right")}>
                <select className={cx("sort")}>
                  <option className={cx("option")}>From Lastest</option>
                </select>
              </div>
            </div>

            <List />
          </div>
        </div>
      )}
    </div>
  );
}

export default StartReading;
