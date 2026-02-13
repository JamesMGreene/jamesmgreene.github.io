import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <section className={styles.section}>
          <Outlet />
        </section>
      </div>
      <Footer />
    </>
  );
}
