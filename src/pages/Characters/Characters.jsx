import "../../index.css";
import "./Character.css";

import Navigation from "../../components/Navigation/Navigation";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";

import cfg from "../../assets/filter-icon.svg";

import { Fragment, useState, useEffect } from "react";

export default function Characters() {
  let [characterData, setCharacterData] = useState([]);

  let filterNames = [
    "Character Alive",
    "Character Dead",
    "Female",
    "Male",
    "Origin Unknown",
  ];

  const getData = async () => {
    let infoApi = await fetch("https://rickandmortyapi.com/api/character")
      .then((resp) => {
        return resp.json();
      })
      .catch((error) => console.log("error:" + error));

    setCharacterData(infoApi.results);
  };

  const filterData = (inputData) => {

    if (inputData.value === "Female" && inputData.checked) {
      let infoFiltered = characterData.filter((character) => {
        return character.gender === "Female";
      });
      setCharacterData(infoFiltered);
    }
    if (inputData.value === "Male") {
      let infoFiltered = characterData.filter((character) => {
        return character.gender === "Male";
      });
      setCharacterData(infoFiltered);
    }
    setTimeout(() => {
      setEstado(false);
    }, 3000);
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
        <section id="filter-section">
          <div className="filter-menu">
            <h2 className="filter-title">Filters</h2>
            <button
              className="btn btn-secondary filter-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFilters"
              aria-expanded="false"
              aria-controls="collapseFilters"
            >
              <img src={cfg} alt="More-Filters" className="filter-icon" />
            </button>
          </div>
          <div className="collapse show" id="collapseFilters">
            <form className="filter-form p-2 pt-0">
              {filterNames.map((filter) => {
                return <Filter key={filter} title={filter} filterData={filterData} />;
              })}
            </form>
          </div>
        </section>
        <section
          id="character-section"
          className="d-flex flex-wrap flex-row justify-content-center pt-5"
        >
          {characterData.map((character) => {
            return <Card key={character.id} characterInfo={character} />;
          })}
        </section>
      </main>
    </>
  );
}
