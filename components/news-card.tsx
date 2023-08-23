import type { NextPage } from "next";
import styles from "./news-card.module.css";

type NewsCardType = {
  imageDimensions?: string;
};

const NewsCard: NextPage<NewsCardType> = ({ imageDimensions }) => {
  return (
    <div className={styles.imageParent}>
      <img className={styles.imageIcon} alt="" src={imageDimensions} />
      <a className={styles.a} href="#">
        أقرأ المزيد
      </a>
      <div className={styles.div}>كم مرة يجب أن أستبدل فرشاة أسناني؟</div>
      <div className={styles.frame}>
        <div className={styles.jan202023}>Jan 20, 2023</div>
      </div>
    </div>
  );
};

export default NewsCard;
