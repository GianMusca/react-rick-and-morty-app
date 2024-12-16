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
                return (
                  <Filter key={filter} title={filter} filterData={filterData} />
                );
              })}
            </form>
          </div>
        </section>
        <section
          id="character-section"
          className="d-flex flex-wrap flex-row justify-content-center pt-5"
        >
          {characterData.length ? (
            characterData.map((character) => {
              return <Card key={character.id} characterInfo={character} />;
            })
          ) : (
            <div
              className="alert-container alert alert-success border-0 d-flex align-items-center gap-2"
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill='#344D67'
                class="bi bi-exclamation-triangle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              <p className="alert-text m-0">Sorry! There are no characters width all those properties.</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
