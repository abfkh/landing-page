import type { NextPage } from "next";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Sponsers from "../components/sponsers";
import FeatureHead from "../components/feature-head";
import Tools from "../components/tools";
import About from "../components/about";
import News from "../components/news";
import JoinSection from "../components/join-section";
import Footer from "../components/footer";
import styles from "./index.module.css";
const Frame: NextPage = () => {
  return (
    <div className={styles.div}>
      <Nav />
      <Hero />
      <Sponsers />
      <FeatureHead />
      <Tools />
      <About />
      <div className={styles.child} />
      <News />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Frame;
