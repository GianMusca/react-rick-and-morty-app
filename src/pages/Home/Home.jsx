import "./Home.css";
import "../../index.css";

export default function Home() {
  return (
    <section
      id="home-page"
      className="d-flex justify-content-center align-items-center w-100 vh-100"
    >
      <div id="home-hero" className="container border border-white">
        <h1 className="text-center tx-cl-1 title-1">Project Rick & Morty</h1>
        <h2 className="text-center tx-cl-1 mt-4">Welcome to Rick & Morty Project!</h2>
        <p className="mt-4">
          This proyect was made for practising React and to made a functional
          website.
        </p>
        <p className="mt-4">
          In this website you can know information of the characters of this
          animated series.
        </p>
        <p className="mt-4">
          Also you can filter for diferent types of properties to find the
          character that you are looking for or send us a massage for any
          concern o sugestion.
        </p>
        <h2 className="text-center tx-cl-1 mt-4 pt-2">Let's go!</h2>
      </div>
    </section>
  );
}
