import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "../../scss/side.module.scss";

const main_side = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isData = ["/", "/add"].includes(pathname);
  const isCategory = ["/category"].includes(pathname);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.container}>
          <span className={styles.text}>경기상업고등학교</span>
          <img src={"/images/icon-hamburger-btn.svg"} alt={"햄버거바"} />
        </div>
      </div>
      <ul className={styles.body}>
        <li>
          <NavLink
            to={"/"}
            className={styles.container}
            activeClassName={styles.active}
            isActive={()=>isData}
          >
            <img src={isData ? "/images/icon-on-01.svg" : "/images/icon-off-01.svg"} alt={"문서"} />
            <span>자료 관리</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/category"}
            className={styles.container}
            activeClassName={styles.active}
            isActive={()=>isCategory}
          >
            <img src={isCategory ? "/images/icon-on-02.svg" : "/images/icon-off-02.svg"} alt={"폴더"} />
            <span>분류 관리</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default main_side;
