import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import style from "./BookPreviewCategory.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function BookPreviewCategory({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("image")}>
        <img className={cx("img")} src={data.thumbnail} alt={data.title} />
      </div>
      <div className={cx("header")}>
        <div className={cx("name")}>
          <h5>{data.title}</h5>
        </div>
        <span className={cx("btn")}>
          <FontAwesomeIcon icon={faBookmark} />
        </span>
      </div>
      <div className={cx("body")}>
        <div className={cx("item-infors")}>
          <span className={cx("label")}>Genre: </span>
          <span className={cx("value")}>{data.category}</span>
        </div>
        <div className={cx("item-infors")}>
          <span className={cx("label")}>Status: </span>
          <span className={cx("value")}>{data.status}</span>
        </div>
        <div className={cx("item-infors")}>
          <span className={cx("label")}>View: </span>
          <span className={cx("value")}>{data.view_count}</span>
        </div>
        <div className={cx("desc")}>{data.desc}</div>

        <Link to={`/${data.id}`} className={cx("start")}>
          <div className={cx("start-name")}>Start Reading</div>
        </Link>
      </div>
    </div>
  );
}

export default BookPreviewCategory;
