import React from "react";
import styles from "../scss/main_side.module.scss";
import { NavLink, useLocation } from "react-router-dom";

const main_sidebar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <div className={styles.side_wrapper}>
      <div className={styles.side_header}>
        <div className={styles.header_container}>
          <span className={styles.header_container_title}>
            경기상업고등학교
          </span>
          <img
            className={styles.header_container_menu_btn}
            src={"/images/icon-hamburger-btn.svg"}
            alt={"햄버거바"}
          />
        </div>
      </div>
      <div className={styles.side_body}>
        <ul>
          <li>
            <NavLink
              className={styles.list_container}
              activeClassName={styles.active}
              to={"/data/list"}
              isActive={() => pathname.includes("/data/")}
            >
              <img
                className={styles.list_container_menu_img}
                src={
                  pathname.includes("/data/")
                    ? "/images/icon-on-01.svg"
                    : "/images/icon-off-01.svg"
                }
                alt={"문서"}
              />
              <span className={styles.list_container_text}>자료 관리</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.list_container}
              activeClassName={styles.active}
              to={"/category/list"}
              isActive={() => pathname.includes("/category/")}
            >
              <img
                className={styles.list_container_menu_img}
                src={
                  pathname.includes("/category/")
                    ? "/images/icon-on-02.svg"
                    : "/images/icon-off-02.svg"
                }
                alt={"폴더"}
              />
              <span className={styles.list_container_text}>분류 관리</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default main_sidebar;
