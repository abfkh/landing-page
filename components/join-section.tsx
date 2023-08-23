import type { NextPage } from "next";
import styles from "./join-section.module.css";
const JoinSection: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.parent}>
        <div className={styles.div}>
          <p className={styles.p}>انضم الى منصتنا وأستمتع</p>
          <p className={styles.p1}>بالعديد من العروض</p>
        </div>
        <div className={styles.div1}>
          هنا تجد جميع الأخبار والمقالات المميزة والعروض الحصرية وكل ما تريد هنا
        </div>
      </div>
      <div className={styles.frameGroup}>
        <button className={styles.wrapper}>
          <div className={styles.div2}> كمورد</div>
        </button>
        <button className={styles.container}>
          <div className={styles.div3}>كمشتري</div>
        </button>
      </div>
    </div>
  );
};

export default JoinSection;
