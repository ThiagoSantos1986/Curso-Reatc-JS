// import { useEffect } from "react";
import "./gnocchi.css";
import CardGnocchi from "./GnocchiCard"
import Molhos from "../molhos/Molhos";

function Gnocchi() {

  const listGnocchi = [{
    id: 1,
    title: "Gnocchi de Batata",
    price: "R$ 38,00",
    img: '/gnocchi_batata.jpg'
  },
  {
    id: 2,
    title: "Gnocchi de Cenoura",
    price: "R$ 38,00",
    img: '/gnocchi_cenoura.jpg'
  },
  {
    id: 3,
    title: "Gnocchi de Espinafre",
    price: "R$ 38,00",
    img: '/gnocchi_espinafre.jpg'
  },
  {
    id: 4,
    title: "Gnocchi de Beterraba",
    price: "R$ 38,00",
    img: '/gnocchi_beterraba.jpg'
  }

  ]

  const listMolhos = ['Alla Puttanesca','Al Pesto di Basilico', 'Cacio e Pepe','Alla Matriciana']
  
  return (
    <section id="gnocchi" className="gnocchi-section ">
      <div id="gnocchi-grid">
        <CardGnocchi listGnocchi={listGnocchi} />
      </div>

      <Molhos   molhos={listMolhos} />
    </section>
  );
}

export default Gnocchi;
