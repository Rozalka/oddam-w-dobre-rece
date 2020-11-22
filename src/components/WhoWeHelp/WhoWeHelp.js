import React, { useState } from "react";
import "../WhoWeHelp/whoWeHelp.scss";
// import Pagination from '../Pagination/Pagination';

function WhoWeHelp() {
  const foundations = {
    id: 0,
    details: [
      {
        name: "Fundacja “Dbam o Zdrowie”",
        info:
          "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        tags: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
      },
      {
        name: "Fundacja “Dla dzieci”",
        info: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        tags: "ubrania, jedzenie, zabawki",
      },
      {
        name: "Fundacja “Bez domu”",
        info:
          "Cel i misja: Pomoc dla osób nieposiadających miejsca zamieszkania.",
        tags: "ubrania, jedzenie, ciepłe koce",
      },
      {
        name: "Fundacja “Dbam o Zdrowie”",
        info:
          "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        tags: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
      },
      {
        name: "Fundacja “Dla dzieci”",
        info: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        tags: "ubrania, jedzenie, zabawki",
      },
      {
        name: "Fundacja “Bez domu”",
        info:
          "Cel i misja: Pomoc dla osób nieposiadających miejsca zamieszkania.",
        tags: "ubrania, jedzenie, ciepłe koce",
      },
    ],
  };

  const organisations = {
    id: 1,
    details: [
      {
        name: "Organizacja 1",
        info: "info about local1",
        tags: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
      },
      {
        name: "Organizacja 2",
        info: "info about local2",
        tags: "ubrania, jedzenie, zabawki",
      },
      {
        name: "Organizacja 3",
        info: "info about local3",
        tags: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
      },
    ],
  };

  const locals = {
    id: 2,
    details: [
      {
        name: "Zbiórka 1",
        info: "info about local1",
        tags: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
      },
      {
        name: "Zbiórka 2",
        info: "info about local2",
        tags: "ubrania, jedzenie, zabawki",
      },
      {
        name: "Zbiórka 3",
        info: "info about local3",
        tags: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
      },
    ],
  };

  const options = [foundations, organisations, locals];
  const [chosenOption, setChosenOption] = useState(0);

  const handleClick = (e) => {
    setChosenOption(e.target.id);
  };

  return (
    <section className="who-help" id="foundation">
      <h2 className="who-help-title">Komu pomagamy?</h2>
      <div className="decor"></div>
      <div className="who-help-info">
        <button className="who-help-btn" id={0} onClick={handleClick}>
          Fundacjom
        </button>
        <button className="who-help-btn" id={1} onClick={handleClick}>
          Organizacjom pozarządowym
        </button>
        <button className="who-help-btn" id={2} onClick={handleClick}>
          Lokalnym zbiórkom
        </button>
      </div>
      <div className="who-help-description">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </div>
      <div className="who-help-list">
        <ul className="who-help-list-elem">
          {options[chosenOption].details.map((e) => (
            <li className="who-help-option">
              <div className="option-details">
                <h3 className="option-name">{e.name}</h3>
                <p className="option-info">{e.info}</p>
              </div>
              <div className="option-tags">{e.tags}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="who-help-pagination"></div>
    </section>
  );
}

export default WhoWeHelp;
