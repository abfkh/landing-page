import type { NextPage } from "next";
import styles from "./nav.module.css";
const Nav: NextPage = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.content} id="1">
        <button className={styles.hamburger}>
          <img
            className={styles.hamburgerMenuIcon}
            alt=""
            src="/notification.svg"
          />
        </button>
        <div className={styles.actions}>
          <button className={styles.primaryButton}>
            <div className={styles.buttonStyleWithLabel}>
              <div className={styles.buttonMasterMedium}>
                <div className={styles.container1}>
                  <img
                    className={styles.iconLeft}
                    alt=""
                    src="/iconleft4.svg"
                  />
                  <b className={styles.label}>التسجيل</b>
                  <img
                    className={styles.iconLeft}
                    alt=""
                    src="/iconleft4.svg"
                  />
                </div>
              </div>
            </div>
          </button>
          <div className={styles.tertiaryButton}>
            <div className={styles.buttonStyleWithLabel}>
              <div className={styles.buttonMasterMedium1}>
                <div className={styles.container1}>
                  <img
                    className={styles.iconLeft}
                    alt=""
                    src="/iconleft5.svg"
                  />
                  <button className={styles.label1}>تسجيل الدخول</button>
                  <img
                    className={styles.iconLeft}
                    alt=""
                    src="/iconleft5.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.buttonStyleWithLabel}>
            <div className={styles.buttonMasterMedium1}>
              <div className={styles.container1}>
                <img className={styles.iconLeft} alt="" src="/iconleft6.svg" />
                <a className={styles.label2} href="#">
                  تواصل معنا
                </a>
                <img className={styles.iconLeft} alt="" src="/iconright.svg" />
              </div>
            </div>
          </div>
          <div className={styles.buttonStyleWithLabel}>
            <div className={styles.buttonMasterMedium1}>
              <div className={styles.container1}>
                <img className={styles.iconLeft} alt="" src="/iconleft6.svg" />
                <a className={styles.label2} href="#">
                  المميزات
                </a>
                <img className={styles.iconLeft} alt="" src="/iconright.svg" />
              </div>
            </div>
          </div>
          <a className={styles.buttonStyleWithLabel4} href="#">
            <div className={styles.buttonMasterMedium1}>
              <div className={styles.container1}>
                <img className={styles.iconLeft} alt="" src="/iconleft6.svg" />
                <div className={styles.label4}>من نحن</div>
                <img
                  className={styles.iconLeft}
                  alt=""
                  src="/media--icon.svg"
                />
              </div>
            </div>
          </a>
          <div className={styles.buttonStyleWithLabel}>
            <div className={styles.buttonMasterMedium1}>
              <div className={styles.container1}>
                <img className={styles.iconLeft} alt="" src="/iconleft6.svg" />
                <a className={styles.label2} href="#">
                  الرئيسية
                </a>
                <img
                  className={styles.iconLeft}
                  alt=""
                  src="/media--icon.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <a className={styles.logoBlock} href="#">
          <div className={styles.frameParent}>
            <img className={styles.frameChild} alt="" src="/frame-238642.svg" />
            <img className={styles.ppIcon} alt="" src="/pp.svg" />
            <div className={styles.dentistry}>
              <span>{`dentistry `}</span>
            </div>
          </div>
        </a>
      </nav>
    </div>
  );
};

export default Nav;
