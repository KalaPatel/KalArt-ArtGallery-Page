import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imgWrapper}>
        <Image
          src={data.primaryImage}
          width={150}
          height={160}
          alt="Vincent van Gogh, Shoes"
        />
      </div>
      <div className={styles.textBox}>
        <p className={styles.artName}> {`${data?.title}`.slice(0, 17)}</p>
        <h4 className={styles.artistName}>{data?.artistDisplayName}</h4>
        <p>
          Date: <span className={styles.info}>{data?.objectDate}</span>
        </p>
        <p>
          Medium:{" "}
          <span className={styles.info}>{`${data?.medium}`.slice(0, 17)}</span>
        </p>
        <p>
          Dimensions:{" "}
          <span className={styles.info}>
            {" "}
            {`${data?.dimensions}`.slice(0, 40)}
          </span>
        </p>
      </div>
      <Link href={`/artworks/${data.objectID}`}>More Info</Link>
    </div>
  );
};

export default Card;
