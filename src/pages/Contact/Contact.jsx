import React from "react";

import Navigation from "../../components/Navigation/Navigation";
import Form from "../../components/Form/Form";

export default function Contact() {
  return (
    <>
      <header className="sticky-top">
        <Navigation />
      </header>
      <main>
        <Form></Form>
      </main>
    </>
  );
}
