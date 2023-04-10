import { dataMock } from "@/pages/api/mocks.js";

// Ritorna l'array con tuti gli oggetti
export function getAllData() {
  return dataMock;
}

// ritorna solo le chiavi objectID
// inizializza una variabile come array vuoto, mappa l'intero array e ne pushia il contenuto al suo interno.
export function getAllObjectId() {
  let objectId = [];
  getAllData().map((item) => {
    objectId.push(`/artworks/${item.objectID}`);
  });

  return objectId;
}

export function getAllArtistName() {
  let artistName = [];
  getAllData().map((item) => {
    artistName.push(`/${item.artistDisplayName}`);
  });

  return artistName;
}

// artistDisplayName;

// ritorna il solo oggetto che ha quella precisa chiave objectID
export function getArtworkData(param) {
  // variabile che conterrà effettivamente il contenuto del singolo post
  let artwork = null;
  getAllData().map((element) => {
    // artwork = element !== param;
    if (element.objectID == param) {
      artwork = element;
      return;
    }
  });
  return artwork;
}

export function getArtworkObj(param) {
  let artwork = [];
  artwork = getAllData().filter((item) => item.artistDisplayName == param);
  return artwork;
}
