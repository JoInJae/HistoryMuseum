import React from "react";
import styles from "./scss/main.module.scss";

const Sidebar = React.lazy(() => import('./sidebar/main_sidebar'));

const Main = ({title, content}) =>{
    return(
        <div className={styles.all_wrapper}>
            <Sidebar />
            <div className={styles.content_wrapper}>
                <div className={styles.content_header}>
                    <div className={styles.content_header_container}>
                        <span className={styles.content_header_title}>
                            {title}
                        </span>
                    </div>
                </div>
                {content}
            </div>
        </div>
    );
};


export default Main;