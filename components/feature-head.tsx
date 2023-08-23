import type { NextPage } from "next";
import styles from "./feature-head.module.css";
const FeatureHead: NextPage = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.div}>
        <span>{` خدماتنا `}</span>
        <span className={styles.span}>المميزة</span>
      </div>
      <div className={styles.div1}>
        هنا تجد جميع الخدمات المميزة والعروض الحصرية وكل ما تريد هنا
      </div>
    </div>
  );
};

export default FeatureHead;
