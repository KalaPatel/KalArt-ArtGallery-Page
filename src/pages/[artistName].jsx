import styles from "../styles/Artworks.module.scss";
import { getAllArtistName, getArtworkObj } from "../utils/utils.js";
import Card from "@/components/card";
import Layout from "@/components/layout";

export default function artistPage({ artworkData }) {
  console.log(artworkData);
  return (
    <Layout>
      <div className={styles.Artworks}>
        {artworkData?.map((item) => (
          <Card data={item} key={item.objectID} />
        ))}
      </div>
    </Layout>
  );
}
export const getStaticPaths = () => {
  const paths = getAllArtistName();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const artworkData = getArtworkObj(params.artistName);
  console.log(params);
  return {
    props: {
      artworkData,
    },
  };
};
