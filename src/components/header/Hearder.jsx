import styles from "./index.module.scss";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.Header}>
      <Link href="/"> HOME</Link>
      <Link href="/artworks">ARTWORKS</Link>
    </div>
  );
};

export default Header;
