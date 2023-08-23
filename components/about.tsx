import type { NextPage } from "next";
import styles from "./about.module.css";
const About: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.imageWrapper}>
        <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
      </div>
      <div className={styles.parent}>
        <div className={styles.div}>
          <span>{`من `}</span>
          <span className={styles.span}>نحن</span>
        </div>
        <div className={styles.div1}>
          فريقنا لديه مهمة واحدة فقط: اجعلك تبتسم
        </div>
        <div className={styles.div2}>
          هنا تجد جميع الخدمات المميزة والعروض الحصرية وكل ما تريد هنا
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.group}>
            <div className={styles.div3}>م. محمد علي</div>
            <div className={styles.div4}>مدير المنصة</div>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.imageIcon1} alt="" src="/image2@2x.png" />
          </div>
        </div>
        <button className={styles.wrapper}>
          <b className={styles.b}>حول خدماتنا</b>
        </button>
      </div>
      <div className={styles.imageFrame}>
        <img className={styles.imageIcon} alt="" src="/image3@2x.png" />
      </div>
    </div>
  );
};

export default About;
