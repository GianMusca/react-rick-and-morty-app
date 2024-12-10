import "./Home.css";
import "../../index.css";

import Button from "../../components/Button/Button";

export default function Home() {
  return (
    <section
      id="home-page"
      className="d-flex justify-content-center align-items-center w-100 vh-100"
    >
      <div id="home-hero" className="container-fluid">
        <h1 className="text-center title-1">Project Rick & Morty</h1>
        <h2 className="text-center mt-4 title-2">
          Welcome to Rick & Morty Project!
        </h2>
        <p className="mt-4 r-m-home-p">
          This proyect was made for practising React and to made a functional
          website.
        </p>
        <p className="mt-md-4 mb-md-1 mb-0 r-m-home-p">
          In this website you can know information of the characters of this
          animated series.
        </p>
        <p className="mt-md-4 mt-0 r-m-home-p">
          Also you can filter for diferent types of properties to find the
          character that you are looking for or send us a massage for any
          concern o sugestion.
        </p>
        <h2 className="text-center mt-4 pt-2 title-2">Let's go!</h2>
        <div className="d-flex w-100 justify-content-center align-items-center gap-md-3 flex-md-row flex-column gap-0 ">
          <Button title="Characters"></Button>
          <Button title="Contact"></Button>
        </div>
      </div>
    </section>
  );
}
