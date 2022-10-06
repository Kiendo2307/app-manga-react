import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./Category.module.scss";
import CategoryBook from "./CategoryBook";
import CONFIG_ENV from "src/utils/api-url";

const cx = classNames.bind(styles);

function Category() {
  const [bookCategoryResult, setBookCategoryResult] = useState([]);

  const handleClickCategory = () => {
    alert("click me");
  };

  useEffect(() => {
    fetch(`${CONFIG_ENV.url}${CONFIG_ENV.api_get_list_comics}`)
      .then((res) => res.json())

      .then((res) => {
        if (res["status"]) {
          setBookCategoryResult(res.data.data);
        }
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("find-inner")}>
        <div className={cx("find-container")}>
          <h1 className={cx("find-name")}>Danh sách truyện </h1>
          <div className={cx("find-item")}>
            {bookCategoryResult.length > 0 &&
              bookCategoryResult.map((result) => (
                <CategoryBook key={result.id} data={result} />
              ))}
          </div>
        </div>
        <div className={cx("find-category")}>
          <h1 className={cx("title")}>Thể loại</h1>
          <div className={cx("line")}>
            <span className={cx("line-name")}>Các thể loại</span>
          </div>
          <div className={cx("line")} onClick={handleClickCategory}>
            <div className={cx("line-name-1")}>Action</div>
            <div className={cx("line-name-1")}>Adult</div>
            <div className={cx("line-name-1")}>Adventure</div>
            <div className={cx("line-name-1")}>Anime</div>
            <div className={cx("line-name-1")}>Chuyển Sinh</div>
            <div className={cx("line-name-1")}>Comedy</div>
            <div className={cx("line-name-1")}>Comic</div>
            <div className={cx("line-name-1")}>Cooking</div>
            <div className={cx("line-name-1")}>Cổ Đại</div>
            <div className={cx("line-name-1")}>Doujinshi</div>
            <div className={cx("line-name-1")}>Drama</div>
            <div className={cx("line-name-1")}>Doujinshi</div>
            <div className={cx("line-name-1")}>Echhi</div>
            <div className={cx("line-name-1")}>Fantasy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
