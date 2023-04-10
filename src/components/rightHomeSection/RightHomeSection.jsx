import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const RightHomeSection = () => {
  const [link, setLink] = useState("");

  const onHandlePath = (e) => {
    setLink(() => e.target.innerText);
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.text}>MAIN ARTIST</h3>
      <div className={styles.leftBox}>
        <div className={styles.topImg}>
          <Image
            src="https://images.metmuseum.org/CRDImages/ep/original/DP146479.jpg"
            width={200}
            height={200}
            alt="Rembrandt"
          />

          <Link href={`/${link}`}>
            <div className={styles.overlay} onClick={onHandlePath}>
              <h3 className={styles.overlayText}>Rembrandt</h3>
            </div>
          </Link>
        </div>
        <div className={styles.bottomImg}>
          <Image
            src="https://images.metmuseum.org/CRDImages/ep/original/DT1502_cropped2.jpg"
            width={200}
            height={200}
            alt="vanGogh"
          />
          <Link href={`/${link}`}>
            <div className={styles.overlay} onClick={onHandlePath}>
              <h3 className={styles.overlayText}>Vincent van Gogh</h3>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.topImg}>
          <Image
            src="https://images.metmuseum.org/CRDImages/ep/original/DT1398.jpg"
            width={200}
            height={200}
            alt="Pierre-Auguste Renoir"
          />
          <Link href={`/${link}`}>
            <div className={styles.overlay} onClick={onHandlePath}>
              <h3 className={styles.overlayText}>Auguste Renoir</h3>
            </div>
          </Link>
        </div>
        <div className={styles.bottomImg}>
          <Image
            src="https://images.metmuseum.org/CRDImages/ep/original/DP-25465-001.jpg"
            width={200}
            height={200}
            alt="Édouard Manet"
          />
          <Link href={`/${link}`}>
            <div className={styles.overlay} onClick={onHandlePath}>
              <h3 className={styles.overlayText}>Edouard Manet</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default RightHomeSection;
