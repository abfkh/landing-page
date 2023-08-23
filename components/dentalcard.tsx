import type { NextPage } from "next";
import styles from "./dentalcard.module.css";

type DentalcardType = {
  dimensionCode?: string;
};

const Dentalcard: NextPage<DentalcardType> = ({ dimensionCode }) => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.rectangleIcon} alt="" src={dimensionCode} />
      <div className={styles.frameParent}>
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
  );
};

export default Dentalcard;
