import React, { useEffect, useState } from "react";

import "./Card.css";
import InfoList from "../InfoList/InfoList";

export default function Card({ characterInfo }) {
  let [moreOpen, setMoreOpen] = useState(false);

  return (
    <div
      className={`card ${
        moreOpen ? "r-m-card-open" : "r-m-card"
      } p-2 m-2 flex-row flex-wrap justify-content-between`}
    >
      <div className="d-flex flex-column r-m-info">
        <img
          src={characterInfo.image}
          className={`card-img-top card-img-bottom r-m-image ${moreOpen ? "mt-2" : ""}`}
          alt={`Image of ${characterInfo.name}`}
        />
        <div className="card-body d-flex flex-column gap-0 p-0 align-items-center justify-content-between">
          <h2 className="t-cd-r-m card-text text-wrap text-center pt-1">
            {characterInfo.name}
          </h2>
          {!moreOpen ? (
            <button
              type="button"
              onClick={() => setMoreOpen(true)}
              className="btn btn-secondary btn-cd-r-m align-self-end mx-1"
            >
              Know More...
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      {moreOpen ? (
        <div className="d-flex flex-column r-m-info">
          <div className="d-flex flex-row justify-content-end align-items-center">
            <button
              type="button"
              onClick={() => setMoreOpen(false)}
              className="btn btn-secondary border-0 m-2 btn-cd-r-m"
            >
              X
            </button>
          </div>
          <InfoList information={characterInfo} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
