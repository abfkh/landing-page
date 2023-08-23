import type { NextPage } from "next";
import styles from "./hero.module.css";
const Hero: NextPage = () => {
  return (
    <div className={styles.imageParent}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div}>متجر مستلزمات طب الأسنان</div>
          <div className={styles.div1}>التي يمكنك الوثوق بها</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div2}>
            هنا تجد جميع الخدمات المميزة والعروض الحصرية وكل ما تريد هنا
          </div>
        </div>
        <div className={styles.frameGroup}>
          <button className={styles.container}>
            <b className={styles.b}>عرض الخدمات</b>
          </button>
          <button className={styles.frame}>
            <b className={styles.b1}>تسجيل</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
