import styles from "./index.module.scss";
import Link from "next/link";

const LeftHomeSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoSec}>
        <h1 className={styles.title}>KalART Gallery</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim
          fuga incidunt quas dignissimos esse porro cum alias dolore laudantium
          magnam distinctio, doloremque quisquam nam nulla ullam dicta ad
          praesentium!
        </p>
      </div>

      <div className={styles.worksSec}>
        <Link href="/artworks">
          <div className={styles.overlay}>
            <h3 className={styles.text}>Works Gallery</h3>
          </div>
        </Link>
      </div>
      <h3 className={styles.sideText}>Works Gallery</h3>
    </div>
  );
};
export default LeftHomeSection;
