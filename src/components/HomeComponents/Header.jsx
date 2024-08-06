import React from "react";

export default function Header({ text }) {

  return (
    <main>
      <section className="header">
        <h1>{text}</h1>
      </section>
    </main>
  );
}