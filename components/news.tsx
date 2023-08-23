import type { NextPage } from "next";
import NewsCard from "./news-card";
import styles from "./news.module.css";
const News: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.parent}>
        <div className={styles.div}>
          <span>{`آخر `}</span>
          <span className={styles.span}>أخبارنا</span>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div1}>
            هنا تجد جميع الأخبار والمقالات المميزة والعروض الحصرية وكل ما تريد
            هنا
          </div>
        </div>
        <button className={styles.container}>
          <b className={styles.b}>المزيد</b>
        </button>
      </div>
      <div className={styles.frameGroup}>
        <NewsCard imageDimensions="/image4@2x.png" />
        <NewsCard imageDimensions="/image5@2x.png" />
        <NewsCard imageDimensions="/image6@2x.png" />
      </div>
    </div>
  );
};

export default News;
