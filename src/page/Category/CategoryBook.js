import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Category.module.scss";
import Wrapper from "~/components/Popper/Wrapper";
import BookPreviewCategory from "./BookPreviewCategory/BookPreviewCategory";

const cx = classNames.bind(styles);

function CategoryBook({ data }) {
  const renderPreview = (props) => {
    return (
      <div className={cx("preview")} tabIndex="1" {...props}>
        <Wrapper>
          <BookPreviewCategory data={data} />
        </Wrapper>
      </div>
    );
  };

  return (
    <Tippy
      placement="bottom"
      offset={[0, -410]}
      interactive
      delay={[100, 0]}
      render={renderPreview}
    >
      <div className={cx("category-book")}>
        <img className={cx("img")} src={data.thumbnail} alt={data.title} />
        <h5 className={cx("name")}>{data.title}</h5>
        <p className={cx("vol")}>{data.chapter}</p>
        <p className={cx("time")}> {data.updated}</p>
      </div>
    </Tippy>
  );
}

export default CategoryBook;
