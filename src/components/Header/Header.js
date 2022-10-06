import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "~/assets/images/logo5-trans.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useEffect, useRef, useState } from "react";
import Wrapper from "~/components/Popper/Wrapper";
import Button from "~/components/Button";
import BookMarkItem from "~/components/BookMarkItem";
import { Link } from "react-router-dom";
import config from "~/config";
import MenuItem from "./Menu/MenuItem";
import Menu from "./Menu/Menu";
import Account from "../Account/Account";
import useDebounce from "~/hooks/useDebounce";
import * as searchServices from "~/apiServices/searchServices";

const cx = classNames.bind(styles);

function Header() {
  // const [searchResult, setSearchResult] = useState([]);
  // const [searchVaule, setSearchValue] = useState("");
  // const [showResult, setShowResult] = useState(true);
  // const [loading, setLoading] = useState(false);

  // const debounced = useDebounce(searchVaule, 500);

  // const inputRef = useRef();

  // useEffect(() => {
  //   if (!debounced.trim()) {
  //     setShowResult([]);
  //     return;
  //   }

  //   const fetchApi = async () => {
  //     setLoading(true);

  //     const result = await searchServices.search(debounced);
  //     setSearchResult(result);

  //     setLoading(false);
  //   };
  //   fetchApi();
  // }, [debounced]);

  // const handleClear = () => {
  //   setSearchValue("");
  //   setSearchResult([]);
  //   inputRef.current.focus();
  // };

  // const handleHideResult = () => {
  //   setShowResult(false);
  // };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo")}>
          <img className={cx("image")} src={logo} />
        </Link>

        <Menu>
          <MenuItem title="Trang chủ" to={config.routes.home} />
          <MenuItem title="Thể loại" to={config.routes.category} />
          <MenuItem title="Lịch sử" to={config.routes.history} />
        </Menu>

        <div>
          <Tippy
            interactive
            // visible={showResult && searchResult.length > 0}

            render={(attrs) => (
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                {/* <Wrapper>
                  {searchResult.map((result) => (
                    <Account key={result.id} data={result} />
                  ))}
                </Wrapper> */}
              </div>
            )}
            //onClickOutSide={handleHideResult}
          >
            <div className={cx("search")}>
              <input
                //ref={inputRef}
                //value={searchVaule}
                placeholder="Tìm truyện ..."
                spellCheck={false}
                //onChange={(e) => setSearchValue(e.target.value)}
                //onFocus={() => setShowResult(true)}
              />
              {/* {!!searchVaule && !loading && (
                <button className={cx("clear")}>
                  <FontAwesomeIcon icon={faCircleXmark} onClick={handleClear} />
                </button>
              )} */}

              {/* {loading && (
                <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
              )} */}

              <button className={cx("search-btn")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>
        </div>

        <div className={cx("action")}>
          <Tippy
            interactive
            //visible
            render={(attrs) => (
              <div className={cx("bookMark")} tabIndex="-1" {...attrs}>
                <Wrapper>
                  <BookMarkItem />
                  <div className={cx("book-title")}>
                    <span className={cx("view")}>
                      View all saved mangas (12)
                    </span>
                  </div>
                </Wrapper>
              </div>
            )}
          >
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </Tippy>

          <button className={cx("more-btn")}>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
