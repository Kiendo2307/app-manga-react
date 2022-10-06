import classNames from "classnames/bind";
import styles from "./StartReading.module.scss";
import config from "~/config";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CONFIG_ENV from "src/utils/api-url";

const cx = classNames.bind(styles);

function List() {
  const [newData, setNewData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(
        `${CONFIG_ENV.url}${
          CONFIG_ENV.api_get_infors_comic
        }${encodeURIComponent(id)}`
      );
      let data = res && res.data.data ? res.data.data : [];
      if (res["status"]) {
        setNewData(data.data.arr_chapter);
      }
      //console.log("check", data.data.arr_chapter);
    }
    fetchData();
  }, []);

  return (
    <div className={cx("list")}>
      <div className={cx("item")}>
        {newData.map((item, index) => {
          return (
            <div key={index} className={cx("item-more")}>
              <Link
                to={config.routes.reading}
                key={item.id}
                className={cx("item-left")}
              >
                {item.name}
              </Link>

              <span className={cx("item-right")}>{item.updated}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
