import type { NextPage } from "next";
import Dentalcard from "./dentalcard";
import styles from "./tools.module.css";
const Tools: NextPage = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.frameParent}>
        <Dentalcard dimensionCode="/rectangle@2x.png" />
        <div className={styles.rectangleParent}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle1@2x.png"
          />
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <div className={styles.div}>تقويم الأسنان</div>
              <div className={styles.div1}>
                هنا تجد جميع الخدمات المميزة والعروض الحصرية وكل ما تريد هنا
              </div>
            </div>
            <a className={styles.a} href="#">
              أقرأ المزيد
            </a>
          </div>
        </div>
        <Dentalcard dimensionCode="/rectangle2@2x.png" />
      </div>
    </div>
  );
};

export default Tools;
