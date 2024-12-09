import "../../index.css";

import Navigation from "../../components/Navigation/Navigation";
import Card from "../../components/Card/Card";

import { Fragment, useState, useEffect} from "react";

export default function Characters() {
  let [characterData, setCharacterData] = useState([]);

  const getData = async () => {
    let infoApi = await fetch("https://rickandmortyapi.com/api/character")
      .then((resp) => {
        return resp.json();
      })
      .catch((error) => console.log("error:" + error));

    setCharacterData(infoApi.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header className="sticky-top">
        <Navigation />
      </header>
      <main className="container-fluid w-100 vh-100 m-0 p-0">
        <section id="character-section" className="d-flex flex-wrap flex-row justify-content-center">
          {characterData.map((character) => {
            return <Card key={character.id} characterInfo={character} />;
          })}
        </section>
      </main>
    </>
  );
}
