import styles from "./index.module.scss";
import Layout from "@/components/layout";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import Image from "next/image";
import { getAllObjectId, getArtworkData } from "@/utils/utils";
import { useState } from "react";

export default function Work({ artworkData }) {
  const [num, setNum] = useState(0);
  const onHandleNextImg = () => {
    setNum((prev) => prev + 1);
  };

  const onHandlePrevImg = () => {
    setNum((prev) => prev - 1);
  };

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.gallery}>
          {num <= 0 ? (
            <button className={styles.disable} disabled>
              <RxDoubleArrowLeft className={styles.btn} />
            </button>
          ) : (
            <button onClick={onHandlePrevImg}>
              <RxDoubleArrowLeft className={styles.btn} />
            </button>
          )}
          <Image
            src={artworkData?.additionalImages[num]}
            alt={artworkData.title}
            width={300}
            height={350}
            priority
          />
          {num >= artworkData.additionalImages.length - 1 ? (
            <button className={styles.disable} disabled>
              <RxDoubleArrowRight className={styles.btn} />
            </button>
          ) : (
            <button onClick={onHandleNextImg}>
              <RxDoubleArrowRight className={styles.btn} />
            </button>
          )}
        </div>

        <div className={styles.artworkInfo}>
          <div>
            <h2 className={styles.title}>{artworkData.title}</h2>
            <span className={styles.date}>
              ({artworkData.objectBeginDate} - {artworkData.objectEndDate})
            </span>
          </div>
          <h4>{artworkData.artistDisplayName}</h4>
          <span className={styles.bioInfo}>
            {artworkData.artistDisplayBio} - {artworkData.artistNationality}
          </span>
          <hr />
          <h4>Details:</h4>
          <p>
            Classification:{" "}
            <span className={styles.info}>{artworkData?.classification}</span>
          </p>
          <p>
            Medium: <span className={styles.info}>{artworkData?.medium}</span>
          </p>
          <p>
            Dimensions:{" "}
            <span className={styles.info}>{artworkData?.dimensions}</span>
          </p>
          <p>
            Credit Line:{" "}
            <span className={styles.info}>{artworkData?.creditLine}</span>
          </p>

          <p className={styles.info}>
            Preserved at: <br />
            <a href={artworkData.objectURL}>{artworkData?.repository}</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = () => {
  const paths = getAllObjectId();
  return {
    paths,
    fallback: false,
  };
};
// creare staticamente il file html del percorso stesso. Va a creare un file HTML per ogni singolo object che gli passiamo
// CON GETSTATICPROPS DOBBIAMO AVERE ANCHE GETSTATICPATHS
export const getStaticProps = ({ params }) => {
  const artworkData = getArtworkData(params.objectId);
  return {
    props: {
      artworkData,
    },
  };
};

// http://localhost:3000/artworks/objectId
