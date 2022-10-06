import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Account({ data }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src={data.avatar} />

      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>{data.full_name}</span>

          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
          )}
        </p>

        <span className={cx("userName")}>{data.nickname}</span>
      </div>
    </div>
  );
}

export default Account;
