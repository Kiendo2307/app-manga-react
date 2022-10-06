import classNames from "classnames/bind";
import styles from "./BookItem.module.scss";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import Wrapper from "../Popper/Wrapper";
import BookPreview from "~/page/Home/BookPreview/BookPreview";

const cx = classNames.bind(styles);

function BookItem({ data }) {
  const renderPreview = (props) => {
    return (
      <div className={cx("preview")} tabIndex="1" {...props}>
        <Wrapper>
          <BookPreview data={data} />
        </Wrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        placement="bottom"
        offset={[0, -410]}
        interactive
        delay={[100, 0]}
        render={renderPreview}
      >
        <div className={cx("wrapper")}>
          <img className={cx("img")} src={data?.thumbnail} alt={data?.title} />
          <h5 className={cx("name")}>{data?.title}</h5>
          <p className={cx("vol")}>{data?.chapter}</p>
          <p className={cx("time")}>{data?.updated}</p>
        </div>
      </Tippy>
    </div>
  );
}

export default BookItem;
