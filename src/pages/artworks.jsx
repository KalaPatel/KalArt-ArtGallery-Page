import styles from "../styles/Artworks.module.scss";
import Layout from "@/components/layout";
import { getAllData } from "../utils/utils.js";
import Card from "@/components/card";
export default function Artworks({ cardData }) {
  return (
    <Layout>
      <div className={styles.Artworks}>
        {cardData?.map((item) => (
          <Card data={item} key={item.objectID} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = () => {
  const cardData = getAllData();
  return {
    props: {
      cardData,
    },
  };
};
