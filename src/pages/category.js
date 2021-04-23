import React from "react";
import MainSide from "./component/side/main_side";
import styles from "./scss/category.module.scss";

const category = () => {
  return (
      <>
        <MainSide/>
        <div className={styles.content_wrap}>
          <div className={styles.content_wrap_header}>
            <span>분류 관리</span>
          </div>
          <div className={styles.content_wrap_body}>
            <div className={styles.body_wrap}>
              <div className={styles.body_wrap_header}>
                  <span>대분류</span>
              </div>
            </div>
            <div className={styles.body_wrap}></div>
          </div>
        </div>
      </>
  );
};

export default category;
