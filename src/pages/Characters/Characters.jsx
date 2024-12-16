import "../../index.css";
import "./Character.css";

import Navigation from "../../components/Navigation/Navigation";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";

import cfg from "../../assets/filter-icon.svg";

import { Fragment, useState, useEffect } from "react";
import { charactersContext } from "../../context";
import { useContext } from "react";

export default function Characters() {
  let [characterData, setCharacterData] = useState([]);
  let [appliedFilters, setAppliedFilters] = useState([]);

  let completeData = useContext(charactersContext);

  let filterNames = [
    "Character Alive",
    "Character Dead",
    "Female",
    "Male",
    "Origin Unknown",
  ];

  const filterData = () => {
    appliedFilters.forEach((element) => {
      let infoFiltered;
      switch (element) {
        case "Female":
          infoFiltered = characterData.filter((character) => {
            return character.gender === "Female";
          });
          break;
        case "Male":
          infoFiltered = characterData.filter((character) => {
            return character.gender === "Male";
          });
          break;
        case "Character Alive":
          infoFiltered = characterData.filter((character) => {
            return character.status === "Alive";
          });
          break;
        case "Character Dead":
          infoFiltered = characterData.filter((character) => {
            return character.status === "Dead";
          });
          break;
        case "Origin Unknown":
          infoFiltered = characterData.filter((character) => {
            return character.origin.name === "unknown";
          });
          break;
      }
      setCharacterData(infoFiltered);
    });
  };

  const updateFilters = (inputData) => {
    let isChecked = inputData.checked;
    let filterPressed = inputData.value;

    if (isChecked) {
      setAppliedFilters([...appliedFilters, filterPressed]);
    } else {
      setCharacterData(completeData);
      let updatedFilters = appliedFilters.filter((fil) => {
        return fil !== filterPressed;
      });
      setAppliedFilters(updatedFilters);
    }
  };

  useEffect(() => {
    filterData();
  }, [appliedFilters]);


  useEffect(() => {
    setCharacterData(completeData);
  }, [completeData]);

  return (
    <>
      <header className="sticky-top">
        <Navigation page="Characters"/>
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
                  <Filter
                    key={filter}
                    title={filter}
                    filterData={updateFilters}
                  />
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
                fill="#344D67"
                className="bi bi-exclamation-triangle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              <p className="alert-text m-0">
                Sorry! There are no characters width all those properties.
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
