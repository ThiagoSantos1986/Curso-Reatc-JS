import './pastas.css'
import PastaCard  from './PastaCard';

function Pastas(){

    const listPastas = [
  {
    id: 1,
    title: "Espaguete",
    price: "R$ 38,00",
    img: '/espaguete.jpg',
    molhos: ["Alla Puttanesca", "Al Pesto di Basilico", "Cacio e Pepe", "Alla Matriciana"]
  },
  {
    id: 2,
    title: "Tagliatelle",
    price: "R$ 38,00",
    img: '/Tagliatelle.jpg',
    molhos: ["Alla Puttanesca",  "Alla Matriciana"]
  },
  {
    id: 3,
    title: "Fettuccine",
    price: "R$ 38,00",
    img: '/Fettuccine.jpg',
    molhos: ["Alla Puttanesca", "Al Pesto di Basilico", "Cacio e Pepe"]
  },
  {
    id: 4,
    title: "Penne",
    price: "R$ 38,00",
    img: '/Penne.jpg',
    molhos: ["Alla Puttanesca",  "Cacio e Pepe"]
  },
  {
    id: 5,
    title: "Rigatoni",
    price: "R$ 38,00",
    img: '/Rigatoni.jpg',
    molhos: ["Alla Matriciana"]
  },
  {
    id: 4,
    title: "Pappardelle",
    price: "R$ 38,00",
    img: '/pappardelle.jpg',
    molhos: ["Alla Puttanesca", "Alla Matriciana"]
  }
]


    return(
        <section id="pastas" className="pastas-section ">
            
            <div id="pastas-grid">
            
                <PastaCard  listPastas={listPastas}  />

            </div>


        </section>
    )
}

export default Pastas;