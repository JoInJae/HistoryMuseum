import React, { useEffect, useState } from "react";
import { category_get } from "../../config/api";
import { post } from "../../module/message";
import styles from "../scss/data_management.module.scss";

const body = (uuid, name) => {
    return (
        <div key={uuid} className={styles.category_body_container}>
            <span className={styles.category_body_text}>{name}</span>
        </div>
    );
};

const CategoryList = () => {
  const [large, setLarge] = useState([]);
  const [medium, setMedium] = useState([]);
  const [small, setSmall] = useState([]);
  const [param, setParam] = useState({ uuid: null });

    useEffect(() => {

        post(category_get, param).then(r =>{

            const element = [];

            r.map((item) => {
                element.push(body(item.uuid, item.name));
            });

            setLarge(element);
        });
    }, []);

  return (
    <div className={styles.content_wrapper}>
      <div className={styles.category_wrapper}>
        <div className={styles.category_container}>
          <div className={styles.category_header}>
            <div className={styles.category_header_container}>
              <span className={styles.category_header_title}>대분류</span>
            </div>
          </div>
          <div className={styles.category_body}>{large}</div>
        </div>
        <div className={styles.category_container}>
          <div className={styles.category_header}>
            <div className={styles.category_header_container}>
              <span className={styles.category_header_title}>중분류</span>
            </div>
          </div>
        </div>
        <div className={styles.category_container}>
          <div className={styles.category_header}>
            <div className={styles.category_header_container}>
              <span className={styles.category_header_title}>소분류</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
